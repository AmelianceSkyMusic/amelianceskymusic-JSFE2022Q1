import { createHTMLElem } from '../../../../../asm-scripts';
import { IStore } from '../../../../types/interfaces';
import { THTMLParam } from '../../../../types/types';
import { renderCarsCount } from './renderCarsCount';
import { renderCreateCar } from './renderCreateCar';
import { renderRaceButtons } from './renderRaceButtons';

export const renderGarageOptions = async (store: IStore, elem$: THTMLParam) => {
  const garageOptions$ = createHTMLElem(elem$, 'section', {
    class: 'garage__options options',
  });

  await renderCarsCount(store, garageOptions$);
  renderCreateCar(garageOptions$);
  renderRaceButtons(garageOptions$);
};
