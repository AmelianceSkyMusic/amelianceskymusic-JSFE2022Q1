import { createHTMLElem } from '../../../../../../asm-scripts';
import API from '../../../../../API';
import { IStore, IWinner } from '../../../../../types/interfaces';
import { THTMLParam } from '../../../../../types/types';

const renderCar = (elem$: THTMLParam, carObj: IStore) => {
  const carName = ((carObj.name).toString().toLowerCase().split(' '))[0];

  const car$ = createHTMLElem(elem$, 'div', { class: 'car' });
  const carBack$ = createHTMLElem(car$, 'div', { class: 'back' });
  const carFront$ = createHTMLElem(car$, 'div', { class: 'front' });
  carBack$.style.background = `${carObj.color}`;
  carBack$.style.setProperty('-webkit-mask-image', `url("./assets/svg/cars/${carName}-back.svg")`);
  carBack$.style.setProperty('mask-image', `url("./assets/svg/cars/${carName}-back.svg")`);
  carFront$.style.backgroundImage = `url("./assets/svg/cars/${carName}-front.svg")`;
};

export const car = async (elem$: THTMLParam, store: IStore) => {
  const carNameImg$ = createHTMLElem(elem$, 'div', {
    class: 'winners__col winners__col-car-img col-2',
  });

  createHTMLElem(carNameImg$, 'h4', { class: 'h4 winners__car-img-heading' }, 'CAR');
  const winnersCarNameImgContainer$ = createHTMLElem(carNameImg$, 'div', {
    class: 'winners__col-container winners__car-img-container',
  });

  const winnersArr = store.winners as IWinner[];
  winnersArr.forEach(async (winner) => {
    const { id } = winner;
    const carObj = await API.getCar(id);
    const carContainerRow$ = createHTMLElem(winnersCarNameImgContainer$, 'div', {
      class: 'winners__car-img-row',
    });
    renderCar(carContainerRow$, carObj);
  });
};
