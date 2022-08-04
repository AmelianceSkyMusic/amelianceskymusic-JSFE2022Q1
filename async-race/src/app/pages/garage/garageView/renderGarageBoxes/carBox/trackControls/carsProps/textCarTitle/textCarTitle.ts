import { createHTMLElem } from '../../../../../../../../../asm-scripts';
import { TCar, THTMLParam } from '../../../../../../../../types/types';

export const textCarTitle = (elem$: THTMLParam, carObj: TCar) => {
  createHTMLElem(elem$, 'h3', {
    class: 'h4 cars-prop__car-title',
  }, `${carObj.name}`);
};
