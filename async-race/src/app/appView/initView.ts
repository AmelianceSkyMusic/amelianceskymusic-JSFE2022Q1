import { createHTMLElem } from '../../asm-scripts';

export const initView = () => {
  const fragment$: DocumentFragment = new DocumentFragment();

  const bodyContainer$ = createHTMLElem(fragment$, 'div', { class: 'body__container' });
  const header$ = createHTMLElem(bodyContainer$, 'div', { class: 'header' });
  createHTMLElem(header$, 'div', { class: 'container' });
  const main$ = createHTMLElem(bodyContainer$, 'div', { class: 'main' });
  createHTMLElem(main$, 'div', { class: 'container' });
  const footer$ = createHTMLElem(bodyContainer$, 'div', { class: 'footer' });
  createHTMLElem(footer$, 'div', { class: 'container' });

  const body$ = document.querySelector('body') as HTMLElement;
  body$.prepend(fragment$);
};
