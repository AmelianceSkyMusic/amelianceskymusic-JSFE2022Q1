import { createHTMLElem } from '../../../../../asm-scripts';
import { IStore } from '../../../../types/interfaces';
import { THTMLParam } from '../../../../types/types';
import { blockGarageState } from './blockGarageState';
import { blockCreateCar } from './blockCreateCar';
import { blockRaceButtons } from './blockRaceButtons';

export const renderGarageOptions = async (store: IStore, elem$: THTMLParam) => {
  const garageOptions$ = createHTMLElem(elem$, 'section', {
    class: 'garage__options options',
  });

  await blockGarageState(store, garageOptions$);
  blockCreateCar(garageOptions$);
  blockRaceButtons(garageOptions$);
};
