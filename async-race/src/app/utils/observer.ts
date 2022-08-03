import { IStore } from '../types/interfaces';
import { TCars } from '../types/types';

type TCallback = (callback: IStore) => void;

export const observer = (initData: IStore = {}) => {
  const data = initData;
  const subscribers = new Set<TCallback>();

  return {
    updateSettings(key: string, value: string | TCars) {
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
