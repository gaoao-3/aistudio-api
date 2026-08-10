export class HttpError extends Error {
  constructor(
    readonly statusCode: number,
    readonly detail: unknown,
    readonly headers?: Readonly<Record<string, string>>,
  ) {
    super(typeof detail === "string" ? detail : `HTTP ${statusCode}`);
    this.name = "HttpError";
  }
}

export function errorDetail(message: string, type: string): { message: string; type: string } {
  return { message, type };
}

