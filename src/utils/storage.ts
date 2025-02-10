import type { StorageEnum } from "../../types/enum";

export const getStringItem = (key: StorageEnum): string | null => {
  return localStorage.getItem(key);
};
