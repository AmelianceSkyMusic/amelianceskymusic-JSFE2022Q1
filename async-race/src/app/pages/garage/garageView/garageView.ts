import { createHTMLElem } from '../../../../asm-scripts';
import { IStore } from '../../../types/interfaces';
import { disableStopAllButton } from './disableBoxTrackControls/disableStopAllButton';
import { disableStopButton } from './disableBoxTrackControls/disableStopButton';
import { renderGarageBoxes } from './renderGarageBoxes';
import { renderGarageOptions } from './renderGarageOptions';

export const garageView = async (store: IStore) => {
  const fragment$: DocumentFragment = new DocumentFragment();

  const garage$ = createHTMLElem(fragment$, 'div', { class: 'garage col-12' });

  await renderGarageOptions(garage$, store);
  renderGarageBoxes(store, garage$);

  const mainContainer$ = document.querySelector('.main .container .row') as HTMLElement;
  mainContainer$.innerHTML = '';

  mainContainer$.prepend(fragment$);

  disableStopButton();
  disableStopAllButton();
};
