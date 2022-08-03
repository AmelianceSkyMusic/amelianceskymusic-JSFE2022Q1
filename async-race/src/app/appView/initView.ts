import { createHTMLElem } from '../../asm-scripts';

export const initView = () => {
  const fragment$: DocumentFragment = new DocumentFragment();

  const bodyContainer$ = createHTMLElem(fragment$, 'div', { class: 'body__container' });
  const header$ = createHTMLElem(bodyContainer$, 'div', { class: 'header' });
  const headerContainer$ = createHTMLElem(header$, 'div', { class: 'container' });
  createHTMLElem(headerContainer$, 'div', { class: 'row' });

  const main$ = createHTMLElem(bodyContainer$, 'div', { class: 'main' });
  const mainContainer$ = createHTMLElem(main$, 'div', { class: 'container' });
  createHTMLElem(mainContainer$, 'div', { class: 'row' });

  const footer$ = createHTMLElem(bodyContainer$, 'div', { class: 'footer' });
  const footerContainer$ = createHTMLElem(footer$, 'div', { class: 'container' });
  createHTMLElem(footerContainer$, 'div', { class: 'row' });

  const body$ = document.querySelector('body') as HTMLElement;

  body$.classList.add('scroll');

  body$.prepend(fragment$);
};
