import { createHTMLElem } from '../../../asm-scripts';
import { addChangeThemeListener } from '../../../asm-ui/scripts';
import { THTMLParam } from '../../types/types';

const renderLogo = (elem$: THTMLParam) => {
  createHTMLElem(elem$, 'h1', { class: 'h1 logo col-6 col-sm-12' }, 'ASYNC RACE');
};

const renderThemeButton = (elem$: THTMLParam) => {
  const button$ = createHTMLElem(elem$, 'button', { class: 'button button-icon theme-button' });
  createHTMLElem(button$, 'span', { class: 'theme-button__icon-from-dark' }, '☼');
  createHTMLElem(button$, 'span', { class: 'theme-button__icon-from-light' }, '☽');

  addChangeThemeListener(button$);
};

const renderMunu = (elem$: THTMLParam) => {
  const menu$ = createHTMLElem(elem$, 'div', { class: 'menu col-6 col-sm-12' });
  const buttonGarage$ = createHTMLElem(menu$, 'button', { class: 'button menu__garage' }, 'garage');
  const buttonWinners$ = createHTMLElem(
    menu$,
    'button',
    { class: 'button menu__winners' },
    'winners',
  );
  renderThemeButton(menu$);

  buttonGarage$.addEventListener('click', async () => console.log('garage'));
  buttonWinners$.addEventListener('click', async () => console.log('winners'));
};

export const renderHeader = () => {
  const fragment$: DocumentFragment = new DocumentFragment();

  renderLogo(fragment$);
  renderMunu(fragment$);

  const headerContainer$ = document.querySelector('.header .container .row') as HTMLElement;
  headerContainer$.prepend(fragment$);
};
