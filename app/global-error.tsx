"use client";

import NextError from "next/error";

export default function GlobalError({
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  return (
    <html lang="en">
      <body>
        <NextError statusCode={0} />
        <button onClick={reset} type="button">
          Try again
        </button>
      </body>
    </html>
  );
}
