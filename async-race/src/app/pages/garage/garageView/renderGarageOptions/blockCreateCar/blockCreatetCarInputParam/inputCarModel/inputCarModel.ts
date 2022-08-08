import { createHTMLElem } from '../../../../../../../../asm-scripts';
import { THTMLParam } from '../../../../../../../types/types';

export const inputCarModel = async (elem$: THTMLParam) => {
  createHTMLElem(elem$, 'input', {
    class: 'p2 create-car__models', attributes: ['type="text"', 'maxlength="20"'],
  });
};
