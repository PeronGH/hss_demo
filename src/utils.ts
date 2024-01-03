export type MaybePromise<T> = T | Promise<T>;

export function toPercents(value: number): string {
  return `${Math.round(value * 100)}%`;
}

export function maybeParseInt(value: unknown): number | undefined {
  const valueType = typeof value;
  if (valueType === "number") {
    return value as number;
  }
  if (valueType === "string") {
    const parsed = parseInt(value as string, 10);
    if (!isNaN(parsed)) {
      return parsed;
    }
  }
  return undefined;
}
