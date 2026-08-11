import { registerOTel } from "@vercel/otel";

export async function register() {
  registerOTel({
    serviceName: "amul-stock-checker-web",
    attributes: {
      project: "amul-stock-checker",
      "deployment.environment.name": process.env.VERCEL_ENV || "development",
      "service.version": process.env.VERCEL_GIT_COMMIT_SHA || "local",
    },
    instrumentationConfig: {
      fetch: { ignoreUrls: [/\/health$/, /\/metrics$/] },
    },
  });

  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { initializeLogTelemetry } = await import("./lib/server-observability");
    initializeLogTelemetry();
  }
}
