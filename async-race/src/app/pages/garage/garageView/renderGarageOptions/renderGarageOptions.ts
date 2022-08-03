import { createHTMLElem } from '../../../../../asm-scripts';
import { THTMLParam } from '../../../../types/types';
import { renderCarsCount } from './renderCarsCount';
import { renderCreateCar } from './renderCreateCar';
import { renderRaceButtons } from './renderRaceButtons';

export const renderGarageOptions = async (elem$: THTMLParam) => {
  const garageOptions$ = createHTMLElem(elem$, 'section', {
    class: 'garage__options options',
  });

  await renderCarsCount(garageOptions$);
  renderCreateCar(garageOptions$);
  renderRaceButtons(garageOptions$);
};
