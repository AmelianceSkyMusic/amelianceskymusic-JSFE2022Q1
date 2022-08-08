// import { LottiePlayer } from '@lottiefiles/lottie-player';
import Lottie from 'lottie-web';
import { createHTMLElem } from '../../../../../../../../asm-scripts';
import { ICar } from '../../../../../../../types/interfaces';
import { THTMLParam } from '../../../../../../../types/types';

export const car = (carObj: ICar, elem$: THTMLParam) => {
  const carName = ((carObj.name).toString().toLowerCase().split(' '))[0];

  const car$ = createHTMLElem(elem$, 'div', { class: 'car' });
  car$.dataset.id = String(carObj.id);
  const carBack$ = createHTMLElem(car$, 'div', { class: 'back' });
  const carFront$ = createHTMLElem(car$, 'div', { class: 'front' });
  const carSmoke$ = createHTMLElem(car$, 'div', { class: 'smoke' });
  carBack$.style.background = `${carObj.color}`;
  carBack$.style.setProperty('-webkit-mask-image', `url("./assets/svg/cars/${carName}-back.svg")`);
  carBack$.style.setProperty('mask-image', `url("./assets/svg/cars/${carName}-back.svg")`);
  carFront$.style.backgroundImage = `url("./assets/svg/cars/${carName}-front.svg")`;

  Lottie.loadAnimation({
    container: carSmoke$,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './assets/json/smoke.json',
    rendererSettings: {
      progressiveLoad: true,
      hideOnTransparent: true,
    },
  });
};

// src="
//  https://assets1.lottiefiles.com/datafiles/HN7OcWNnoqje6iXIiZdWzKxvLIbfeCGTmvXmEm1h/data.json"
// background="transparent"
// speed="1"
// style="width: 300px; height: 300px;"
// loop
// controls
// autoplay
