import { createHTMLElem } from '../../../../../../../asm-scripts';
import { THTMLParam } from '../../../../../../types/types';
import { inputCarBrand } from './inputCarBrand';
import { inputCarColor } from './inputCarColor';
import { inputCarModel } from './inputCarModel';

export const blockCreatetCarInputParam = async (elem$: THTMLParam) => {
  const carInputs$ = createHTMLElem(elem$, 'div', {
    class: 'create-car__inputs',
  });

  inputCarBrand(carInputs$);
  inputCarModel(carInputs$);
  inputCarColor(carInputs$);
};
