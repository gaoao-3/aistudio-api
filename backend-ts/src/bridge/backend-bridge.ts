export class BridgeError extends Error {
  constructor(readonly statusCode: number, readonly detail: unknown) {
    super(typeof detail === "string" ? detail : `Backend request failed with HTTP ${statusCode}`);
    this.name = "BridgeError";
  }
}

export interface BackendBridge {
  start(): Promise<void>;
  stop(): Promise<void>;
  status(): Readonly<{ running: boolean; pid?: number }>;
  request<T>(
    method: string,
    params?: Readonly<Record<string, unknown>>,
    onChunk?: (chunk: string) => void,
    signal?: AbortSignal,
  ): Promise<T>;
}
