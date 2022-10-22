export type LocalStorageGetType = (key: string) => string | null;

export type LocalStorageType = {
  get: LocalStorageGetType;
};
