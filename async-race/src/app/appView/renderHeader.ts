import { createHTMLElem } from '../../asm-scripts';
import { addChangeThemeListener } from '../../asm-ui/scripts';

const renderLogo = (elem$: HTMLElement) => {
  createHTMLElem(elem$, 'h1', { class: 'h1 logo col-6 col-sm-12' }, 'ASYNC RACE');
};

const renderThemeButton = (elem$: HTMLElement) => {
  const button$ = createHTMLElem(elem$, 'button', { class: 'button button-icon theme-button' });
  createHTMLElem(button$, 'span', { class: 'theme-button__icon-from-dark' }, '☼');
  createHTMLElem(button$, 'span', { class: 'theme-button__icon-from-light' }, '☽');

  addChangeThemeListener(button$);
};

const renderMunuButtons = (elem$: HTMLElement) => {
  const menu$ = createHTMLElem(elem$, 'div', { class: 'menu col-6 col-sm-12' });
  const buttonGarage$ = createHTMLElem(menu$, 'button', { class: 'button menu__garage' }, 'garage');
  const buttonWinners$ = createHTMLElem(
    menu$,
    'button',
    { class: 'button menu__winners' },
    'winners',
  );
  renderThemeButton(menu$);

  buttonGarage$.addEventListener('click', () => {
    console.log('garage');
  });
  buttonWinners$.addEventListener('click', () => {
    console.log('winners');
  });
};

export const renderHeader = () => {
  const fragment$: DocumentFragment = new DocumentFragment();
  const row$ = createHTMLElem(fragment$, 'div', { class: 'row' });

  renderLogo(row$);
  renderMunuButtons(row$);

  const headerContainer$ = document.querySelector('.header .container') as HTMLElement;
  headerContainer$.prepend(fragment$);
};
