import { createHTMLElem } from '../../../../../../../../../../../asm-scripts';
import { ICar } from '../../../../../../../../../../types/interfaces';
import { THTMLParam } from '../../../../../../../../../../types/types';
import { inputCarBrand } from './inputCarBrand';
import { inputCarColor } from './inputCarColor';
import { inputCarModel } from './inputCarModel';

export const blockCarInputParam = async (elem$: THTMLParam, carObj: ICar) => {
  const carInputs$ = createHTMLElem(elem$, 'div', {
    class: 'cars-update-input',
  });

  inputCarBrand(carInputs$, carObj);
  inputCarModel(carInputs$, carObj);
  inputCarColor(carInputs$, carObj);
};
