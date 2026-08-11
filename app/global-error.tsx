"use client";

import { useEffect } from "react";
import { reportClientError } from "@/components/providers/client-error-reporter";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => reportClientError("react_global_error", error), [error]);
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center p-6">
        <main className="max-w-md text-center">
          <h1 className="text-2xl font-semibold">Something went wrong</h1>
          <p className="mt-3 text-muted-foreground">Please try again. The error has been recorded.</p>
          <button className="mt-6 rounded-md bg-primary px-4 py-2 text-primary-foreground" onClick={reset}>Try again</button>
        </main>
      </body>
    </html>
  );
}
