import { createHTMLElem } from '../../../../../../../../asm-scripts';
import { ICar } from '../../../../../../../types/interfaces';
import { THTMLParam } from '../../../../../../../types/types';
import { runCar } from './runCar';
import { stopCar } from './stopCar';

export const carsActions = (elem$: THTMLParam, carObj: ICar) => {
  const controlsCarsAction$ = createHTMLElem(elem$, 'div', { class: 'controls__cars-action' });

  stopCar(controlsCarsAction$, carObj.id);
  runCar(controlsCarsAction$, carObj.id);
};
