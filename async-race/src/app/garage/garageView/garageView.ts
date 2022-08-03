import { createHTMLElem } from '../../../asm-scripts';
import { IStore } from '../../types/interfaces';
import { TCars } from '../../types/types';
import { renderCarBox } from './renderCarBox';
import { renderGarageOptions } from './renderGarageOptions';

export const garageView = async (store: IStore) => {
  const fragment$: DocumentFragment = new DocumentFragment();

  const garage$ = createHTMLElem(fragment$, 'div', { class: 'garage col-12' });

  const cars = store.cars as TCars;
  await renderGarageOptions(garage$);
  cars.forEach((carObj) => {
    renderCarBox(garage$, carObj);
  });
  const mainContainer$ = document.querySelector('.main .container .row') as HTMLElement;
  mainContainer$.innerHTML = '';

  mainContainer$.prepend(fragment$);
};
