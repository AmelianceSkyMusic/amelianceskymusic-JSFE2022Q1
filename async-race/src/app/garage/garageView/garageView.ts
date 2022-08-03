import { createHTMLElem } from '../../../asm-scripts';
import { renderCarBox } from './renderCarBox';
import { renderGarageOptions } from './renderGarageOptions';

export const garageView = async () => {
  const fragment$: DocumentFragment = new DocumentFragment();

  const garage$ = createHTMLElem(fragment$, 'div', { class: 'garage col-12' });

  await renderGarageOptions(garage$);
  renderCarBox(garage$);

  const mainContainer$ = document.querySelector('.main .container .row') as HTMLElement;
  mainContainer$.prepend(fragment$);
};
