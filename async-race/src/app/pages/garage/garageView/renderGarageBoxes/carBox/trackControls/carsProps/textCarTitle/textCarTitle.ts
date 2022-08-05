import { createHTMLElem } from '../../../../../../../../../asm-scripts';
import { ICar } from '../../../../../../../../types/interfaces';
import { THTMLParam } from '../../../../../../../../types/types';

export const textCarTitle = (elem$: THTMLParam, carObj: ICar) => {
  createHTMLElem(elem$, 'h3', {
    class: 'h4 cars-prop__car-title',
  }, `${carObj.name}`);
};
