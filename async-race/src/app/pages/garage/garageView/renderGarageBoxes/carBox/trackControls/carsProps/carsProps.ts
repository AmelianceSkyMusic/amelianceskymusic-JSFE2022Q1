import { createHTMLElem } from '../../../../../../../../asm-scripts';
import { ICar } from '../../../../../../../types/interfaces';
import { THTMLParam } from '../../../../../../../types/types';
import { buttonEditCar } from './buttonEditCar';
import { buttonRemoveCar } from './buttonRemoveCar';
import { textCarTitle } from './textCarTitle';

export const carsProps = (elem$: THTMLParam, carObj: ICar) => {
  const controlsCarsProps$ = createHTMLElem(elem$, 'div', {
    class: 'controls__cars-props',
  });

  buttonRemoveCar(controlsCarsProps$, carObj);
  buttonEditCar(controlsCarsProps$, carObj);
  textCarTitle(controlsCarsProps$, carObj);
};
