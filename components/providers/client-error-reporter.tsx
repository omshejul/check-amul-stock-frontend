"use client";

import { useEffect } from "react";

export function reportClientError(type: string, error: unknown) {
  const value = error instanceof Error ? error : new Error(String(error));
  const payload = JSON.stringify({ type, name: value.name, message: value.message, stack: value.stack });
  if (payload.length > 12_000) return;
  fetch("/api/client-errors", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
    keepalive: true,
  }).catch(() => undefined);
}

export function ClientErrorReporter() {
  useEffect(() => {
    const onError = (event: ErrorEvent) => reportClientError("window_error", event.error || event.message);
    const onRejection = (event: PromiseRejectionEvent) => reportClientError("unhandled_rejection", event.reason);
    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);
    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);
  return null;
}
