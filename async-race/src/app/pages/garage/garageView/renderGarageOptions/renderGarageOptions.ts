import { createHTMLElem } from '../../../../../asm-scripts';
import { IStore } from '../../../../types/interfaces';
import { THTMLParam } from '../../../../types/types';
import { blockGarageState } from './blockGarageState';
import { blockCreateCar } from './blockCreateCar';
import { blockRaceButtons } from './blockRaceButtons';

export const renderGarageOptions = async (elem$: THTMLParam, store: IStore) => {
  const garageOptions$ = createHTMLElem(elem$, 'section', {
    class: 'garage__options row options',
  });

  await blockGarageState(garageOptions$, store);
  blockCreateCar(garageOptions$);
  blockRaceButtons(garageOptions$, store);
};
