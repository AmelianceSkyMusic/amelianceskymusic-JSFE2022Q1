import { createHTMLElem } from '../../asm-scripts';
import { addChangeThemeListener } from '../../asm-ui/scripts';
import { createCar } from '../API/createCar';
import { deleteCar } from '../API/deleteCar';
import { getCar } from '../API/getCar';
import { getCars } from '../API/getCars';
import { startCarSEngine } from '../API/startCarSEngine';
import { switchCarSEngineToDriveMode } from '../API/switchCarSEngineToDriveMode';
import { updateCar } from '../API/updateCar';
import { STORE } from '../data/store';
import { THTMLParam } from '../types/types';

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

  buttonGarage$.addEventListener('click', async () => {
    const cars = await getCars(7);
    STORE.updateSettings('cars', cars);
  });
  buttonWinners$.addEventListener('click', async () => {
    const result = await switchCarSEngineToDriveMode(1);
    console.log('stopped:', result);
  });
};

export const renderHeader = () => {
  const fragment$: DocumentFragment = new DocumentFragment();

  renderLogo(fragment$);
  renderMunu(fragment$);

  const headerContainer$ = document.querySelector('.header .container .row') as HTMLElement;
  headerContainer$.prepend(fragment$);
};
