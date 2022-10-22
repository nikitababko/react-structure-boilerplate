export type LocalStorageServiceGetItemType = (key: string) => string | null;

export type LocalStorageServiceSetItemType = (
  key: string,
  value: string,
) => void;
