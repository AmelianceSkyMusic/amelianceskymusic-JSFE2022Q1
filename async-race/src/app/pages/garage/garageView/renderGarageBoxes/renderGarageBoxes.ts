import { IStore } from '../../../../types/interfaces';
import { TCars, THTMLParam } from '../../../../types/types';
import { carBox } from './carBox';

export const renderGarageBoxes = (store: IStore, elem$: THTMLParam) => {
  const cars = store.cars as TCars;
  cars.forEach((carObj) => {
    carBox(carObj, elem$);
  });
};
