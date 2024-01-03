export type MaybePromise<T> = T | Promise<T>;

export function toPercents(value: number): string {
  return `${Math.round(value * 100)}%`;
}
