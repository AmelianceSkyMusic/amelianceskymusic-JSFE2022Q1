type TObjStrElem = { [key: string]: string };
type TCallback = (callback: TObjStrElem) => void;

export const observer = (initData: TObjStrElem = {}) => {
  const data = initData;
  const subscribers = new Set<TCallback>();

  return {
    updateSettings(key: string, value: string) {
      data[key] = value;
      this.notify();
    },

    notify() {
      subscribers.forEach((fn) => fn(data));
    },

    addSubscriber(callback: TCallback) {
      subscribers.add(callback);
    },

    removeSubscriber(callback: TCallback) {
      subscribers.delete(callback);
    },

    getData() {
      return data;
    },
  };
};
