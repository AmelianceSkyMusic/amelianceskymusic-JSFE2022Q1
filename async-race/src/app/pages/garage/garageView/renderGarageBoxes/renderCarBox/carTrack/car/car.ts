import { createHTMLElem } from '../../../../../../../../asm-scripts';
import { TCar, THTMLParam } from '../../../../../../../types/types';

export const car = (elem$: THTMLParam, carObj: TCar) => {
  const carName = ((carObj.name).toString().toLowerCase().split(' '))[0];

  const car$ = createHTMLElem(elem$, 'div', { class: 'car' });
  const carBack$ = createHTMLElem(car$, 'div', { class: 'back' });
  const carFront$ = createHTMLElem(car$, 'div', { class: 'front' });
  carBack$.style.background = `${carObj.color}`;
  carBack$.style.setProperty('-webkit-mask-image', `url("./assets/svg/cars/${carName}-back.svg")`);
  carBack$.style.setProperty('mask-image', `url("./assets/svg/cars/${carName}-back.svg")`);
  carFront$.style.backgroundImage = `url("./assets/svg/cars/${carName}-front.svg")`;
};
