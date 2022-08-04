import { createHTMLElem } from '../../../../asm-scripts';
import { IStore } from '../../../types/interfaces';
import { renderGarageCars } from './renderGarageCars';
import { renderGarageOptions } from './renderGarageOptions';

export const garageView = async (store: IStore) => {
  const fragment$: DocumentFragment = new DocumentFragment();

  const garage$ = createHTMLElem(fragment$, 'div', { class: 'garage col-12' });

  await renderGarageOptions(store, garage$);
  renderGarageCars(store, garage$);

  const mainContainer$ = document.querySelector('.main .container .row') as HTMLElement;
  mainContainer$.innerHTML = '';

  mainContainer$.prepend(fragment$);
};
