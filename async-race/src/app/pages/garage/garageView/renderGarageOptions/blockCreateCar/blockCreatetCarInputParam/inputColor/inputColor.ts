import { createHTMLElem } from '../../../../../../../../asm-scripts';
import { THTMLParam } from '../../../../../../../types/types';

export const inputColor = async (elem$: THTMLParam) => {
  createHTMLElem(elem$, 'input', {
    class: 'input-color create-car__color', attributes: 'type="color" value="#65b6cb"',
  }) as HTMLInputElement;
};
