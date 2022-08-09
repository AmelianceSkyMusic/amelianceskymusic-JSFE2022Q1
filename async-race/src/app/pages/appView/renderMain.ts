import { createHTMLElem } from '../../../asm-scripts';

export const renderMain = () => {
  const fragment$: DocumentFragment = new DocumentFragment();
  createHTMLElem(fragment$, 'div', {
    class: 'garage show col-12 row', id: 'garage',
  });
  createHTMLElem(fragment$, 'div', {
    class: 'winners col-12 row', id: 'winners',
  });

  const headerContainer$ = document.querySelector('.main .container .row') as HTMLElement;
  headerContainer$.prepend(fragment$);
};
