import { createHTMLElem } from '../../../../../../../../../../asm-scripts';
import { ICar } from '../../../../../../../../../types/interfaces';
import { THTMLParam } from '../../../../../../../../../types/types';
import { blockCarInputParam } from './blockUpdateCarInputParam';
import { buttonUpdateCarParams } from './buttonUpdateCarParams';

export const blockUpdateCar = (elem$: THTMLParam, carObj: ICar) => {
  const blockUpdateCar$ = createHTMLElem(elem$, 'div', {
    class: 'cars-prop_update',
  });

  blockCarInputParam(blockUpdateCar$, carObj);
  buttonUpdateCarParams(blockUpdateCar$, carObj);
};
