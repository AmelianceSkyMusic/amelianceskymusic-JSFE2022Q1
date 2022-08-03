import { createHTMLElem } from '../../../../asm-scripts';
import { THTMLParam } from '../../../types/types';

export const renderCar = (elem$: THTMLParam) => {
  const car$ = createHTMLElem(elem$, 'div', { class: 'car' });
  createHTMLElem(car$, 'div', { class: 'back' });
  createHTMLElem(car$, 'div', { class: 'front' });
};
