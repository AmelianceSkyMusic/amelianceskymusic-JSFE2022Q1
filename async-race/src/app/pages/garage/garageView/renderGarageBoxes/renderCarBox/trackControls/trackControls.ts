import { createHTMLElem } from '../../../../../../../asm-scripts';
import { TCar, THTMLParam } from '../../../../../../types/types';
import { carsActions } from './carsActions';
import { carsProps } from './carsProps';

export const trackControls = (elem$: THTMLParam, carObj: TCar) => {
  const controls$ = createHTMLElem(elem$, 'div', { class: 'controls' });

  carsProps(controls$, carObj);
  carsActions(controls$);
};
