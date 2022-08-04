import { createHTMLElem } from '../../../../../../../asm-scripts';
import { THTMLParam } from '../../../../../../types/types';
import { inputBrand } from './inputBrand';
import { inputColor } from './inputColor';
import { inputModel } from './inputModel';

export const blockCreatetCarInputParam = async (elem$: THTMLParam) => {
  const carInputs$ = createHTMLElem(elem$, 'div', {
    class: 'create-car__inputs',
  });

  inputBrand(carInputs$);
  inputModel(carInputs$);
  inputColor(carInputs$);
};
