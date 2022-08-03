import { IStore } from '../types/interfaces';
import { TCars } from '../types/types';

type TCallback = (callback: IStore) => void;
type TKey = string;
type TValue = string | number | TCars;

export const observer = (initData: IStore = {}) => {
  let data = initData;
  const subscribers = new Set<TCallback>();

  return {
    updateSettingsKey(key: TKey, value: TValue) {
      data[key] = value;
      this.notify();
    },

    updateSettings(settingsObj: { [key: TKey]: TValue }) {
      data = { ...data, ...settingsObj };
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

    setValue(key: TKey, value: TValue) {
      data[key] = value;
    },

    getValue(key: string) {
      return data[key];
    },

    getData() {
      return data;
    },
  };
};
