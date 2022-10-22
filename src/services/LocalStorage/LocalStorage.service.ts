class Service {
  public getItem = (key: string) => {
    return localStorage.getItem(key);
  };

  public setItem = (key: string, value: string) => {
    return localStorage.setItem(key, value);
  };

  public clearAllItems = () => {
    return localStorage.clear();
  };

  public removeItem = (key: string) => {
    return localStorage.removeItem(key);
  };
}

export const LocalStorageService = new Service();
