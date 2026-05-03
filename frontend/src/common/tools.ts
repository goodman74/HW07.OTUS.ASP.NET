
export const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

export type ApiErrorKind = "http" | "network" | "abort" | "parse";

export type ApiError = {
    kind: ApiErrorKind;
    message: string;
    status?: number;
    correlationId?: string;
};

export function isApiError(e: unknown): e is ApiError {
  return typeof e === "object" && e !== null && "kind" in e && "message" in e;
}
