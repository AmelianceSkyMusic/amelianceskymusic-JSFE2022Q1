import { IStore } from '../../../types/interfaces';
import { TCars, THTMLParam } from '../../../types/types';
import { renderCarBox } from './renderCarBox';

export const renderGarageCars = (store: IStore, elem$: THTMLParam) => {
  const cars = store.cars as TCars;
  cars.forEach((carObj) => {
    renderCarBox(elem$, carObj);
  });
};
