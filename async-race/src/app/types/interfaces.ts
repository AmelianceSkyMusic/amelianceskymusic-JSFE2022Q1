import { TCars } from './types';

export interface IStore {
  [key: string]: string | number | TCars;
}
