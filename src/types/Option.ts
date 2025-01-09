export type Option<T = string> = {
  label: string;
  value: T;
} & Record<string, unknown>

export type Options<T = string> = Option<T>[];
