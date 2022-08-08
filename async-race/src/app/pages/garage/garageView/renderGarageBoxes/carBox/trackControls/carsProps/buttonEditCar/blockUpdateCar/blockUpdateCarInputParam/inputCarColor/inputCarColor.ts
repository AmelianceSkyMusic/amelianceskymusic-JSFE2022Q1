import { createHTMLElem } from '../../../../../../../../../../../../asm-scripts';
import { ICar } from '../../../../../../../../../../../types/interfaces';
import { THTMLParam } from '../../../../../../../../../../../types/types';

export const inputCarColor = async (elem$: THTMLParam, carObj: ICar) => {
  createHTMLElem(elem$, 'input', {
    class: 'input-color cars-update-input__color',
    attributes: ['type="color"', `value="${carObj.color}"`],
  }) as HTMLInputElement;
};
