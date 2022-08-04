import { createHTMLElem } from '../../../../../../../../../asm-scripts';
import { TCar, THTMLParam } from '../../../../../../../../types/types';

export const buttonEditCar = (elem$: THTMLParam, carObj: TCar) => {
  createHTMLElem(elem$, 'button', {
    class: 'button-sm button-icon-sm cars-prop_edit-button',
  }, '✎');
};
