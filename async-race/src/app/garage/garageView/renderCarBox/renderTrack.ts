import { createHTMLElem } from '../../../../asm-scripts';
import { THTMLParam } from '../../../types/types';
import { renderCar } from './renderCar';

export const renderTrack = (elem$: THTMLParam) => {
  const track$ = createHTMLElem(elem$, 'div', { class: 'track' });

  renderCar(track$);
};
