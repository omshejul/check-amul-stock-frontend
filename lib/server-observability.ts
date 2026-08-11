import "server-only";

import { context, trace, SpanStatusCode } from "@opentelemetry/api";
import { SeverityNumber } from "@opentelemetry/api-logs";
import { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-proto";
import { resourceFromAttributes } from "@opentelemetry/resources";
import { BatchLogRecordProcessor, LoggerProvider } from "@opentelemetry/sdk-logs";

let provider: LoggerProvider | null = null;

const replacements: Array<[RegExp, string]> = [
  [/Bearer\s+[A-Za-z0-9._~+/=-]+/gi, "Bearer [REDACTED]"],
  [/(authorization|cookie|token|apikey|password)(["'\s:=]+)[^\s,;"'}]+/gi, "$1$2[REDACTED]"],
  [/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "[EMAIL]"],
  [/(?:\+?91[-\s]?)?[6-9]\d{9}/g, "[PHONE]"],
  [/https?:\/\/[^\s]+/gi, "[URL]"],
];

function sanitize(value: unknown, limit = 2000) {
  let result = String(value || "Unknown error");
  for (const [pattern, replacement] of replacements) result = result.replace(pattern, replacement);
  return result.slice(0, limit);
}

export function initializeLogTelemetry() {
  if (provider) return;
  const endpoint = process.env.OTEL_EXPORTER_OTLP_LOGS_ENDPOINT;
  const token = process.env.GRAFANA_OTLP_LOGS_TOKEN;
  if (!endpoint || !token) return;

  provider = new LoggerProvider({
    resource: resourceFromAttributes({
      "service.name": "amul-stock-checker-web",
      project: "amul-stock-checker",
      "deployment.environment.name": process.env.VERCEL_ENV || "production",
      "service.version": process.env.VERCEL_GIT_COMMIT_SHA || "local",
    }),
    processors: [new BatchLogRecordProcessor({
      exporter: new OTLPLogExporter({
        url: endpoint,
        headers: { Authorization: `Bearer ${token}` },
      }),
    })],
  });
}

export async function recordError(error: unknown, operation: string, fields: Record<string, string | number> = {}) {
  initializeLogTelemetry();
  const caught = error instanceof Error ? error : new Error(String(error));
  const safe = {
    type: sanitize(caught.name, 120),
    message: sanitize(caught.message, 500),
    stack: sanitize(caught.stack, 4000),
  };
  const activeSpan = trace.getSpan(context.active());
  if (activeSpan) {
    activeSpan.recordException(safe);
    activeSpan.setStatus({ code: SpanStatusCode.ERROR, message: safe.message });
  }
  const spanContext = activeSpan?.spanContext();
  const attributes = {
    operation,
    error_type: safe.type,
    error_message: safe.message,
    error_stack: safe.stack,
    ...fields,
    ...(spanContext?.traceId ? { trace_id: spanContext.traceId, span_id: spanContext.spanId } : {}),
  };
  process.stdout.write(`${JSON.stringify({ timestamp: new Date().toISOString(), level: "error", message: "operation_failed", ...attributes })}\n`);
  if (provider) {
    provider.getLogger("amul-stock-checker-web").emit({
      severityNumber: SeverityNumber.ERROR,
      severityText: "ERROR",
      body: "operation_failed",
      attributes,
    });
    await provider.forceFlush({ timeoutMillis: 1500 }).catch(() => undefined);
  }
}
