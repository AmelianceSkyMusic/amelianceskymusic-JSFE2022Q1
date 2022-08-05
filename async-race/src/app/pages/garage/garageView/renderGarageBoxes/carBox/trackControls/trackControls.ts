import { createHTMLElem } from '../../../../../../../asm-scripts';
import { ICar } from '../../../../../../types/interfaces';
import { THTMLParam } from '../../../../../../types/types';
import { carsActions } from './carsActions';
import { carsProps } from './carsProps';

export const trackControls = (elem$: THTMLParam, carObj: ICar) => {
  const controls$ = createHTMLElem(elem$, 'div', { class: 'controls' });

  carsProps(controls$, carObj);
  carsActions(controls$);
};
