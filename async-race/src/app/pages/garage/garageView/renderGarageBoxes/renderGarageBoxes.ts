import { ICar, IStore } from '../../../../types/interfaces';
import { THTMLParam } from '../../../../types/types';
import { carBox } from './carBox';

export const renderGarageBoxes = (store: IStore, elem$: THTMLParam) => {
  const cars = store.cars as ICar[];
  cars.forEach((carObj) => {
    carBox(carObj, elem$);
  });
};
