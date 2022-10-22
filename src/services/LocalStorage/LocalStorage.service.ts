import {
  LocalStorageServiceGetItemType,
  LocalStorageServiceSetItemType,
} from './LocalStorage.types';

class Service {
  public getItem: LocalStorageServiceGetItemType = key => {
    return localStorage.getItem(key);
  };

  public setItem: LocalStorageServiceSetItemType = (key, value) => {
    localStorage.setItem(key, value);
  };

  public clearAllItems = () => {
    localStorage.clear();
  };

  public removeItem = (key: string) => {
    localStorage.removeItem(key);
  };
}

export const LocalStorageService = new Service();
