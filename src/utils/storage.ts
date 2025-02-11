import type { StorageEnum } from "#/enum";

export const getStringItem = (key: StorageEnum): string | null => {
  return localStorage.getItem(key);
};
