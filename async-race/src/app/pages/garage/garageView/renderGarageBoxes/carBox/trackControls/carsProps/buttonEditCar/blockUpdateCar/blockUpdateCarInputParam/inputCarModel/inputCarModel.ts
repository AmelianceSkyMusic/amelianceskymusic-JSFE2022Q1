import { createHTMLElem } from '../../../../../../../../../../../../asm-scripts';
import { ICar } from '../../../../../../../../../../../types/interfaces';
import { THTMLParam } from '../../../../../../../../../../../types/types';

export const inputCarModel = async (elem$: THTMLParam, carObj: ICar) => {
  const carName = carObj.name;
  let carModel = '';
  if (carName.split(' ').length > 1) carModel = carName.substring(carName.indexOf(' ') + 1);

  createHTMLElem(elem$, 'input', {
    class: 'p2 cars-update-input__model',
    attributes: `type="text" maxlength="20" value="${carModel}"`,
  });
};
