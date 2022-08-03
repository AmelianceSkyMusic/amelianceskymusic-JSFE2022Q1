import { createHTMLElem } from '../../../../asm-scripts';
import { renderGarageCars } from './renderGarageCars';
import { renderGarageOptions } from './renderGarageOptions';

export const garageView = async () => {
  const fragment$: DocumentFragment = new DocumentFragment();

  const garage$ = createHTMLElem(fragment$, 'div', { class: 'garage col-12' });

  await renderGarageOptions(garage$);
  renderGarageCars(garage$);

  const mainContainer$ = document.querySelector('.main .container .row') as HTMLElement;
  mainContainer$.innerHTML = '';

  mainContainer$.prepend(fragment$);
};
