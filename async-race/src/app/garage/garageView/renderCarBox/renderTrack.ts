import { createHTMLElem } from '../../../../asm-scripts';
import { TCar, THTMLParam } from '../../../types/types';
import { renderCar } from './renderCar';

export const renderTrack = (elem$: THTMLParam, carObj: TCar) => {
  const track$ = createHTMLElem(elem$, 'div', { class: 'track' });

  renderCar(track$, carObj);
};
