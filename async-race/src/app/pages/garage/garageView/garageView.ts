import { IStore } from '../../../types/interfaces';
import { disableStopAllButton } from './disableBoxTrackControls/disableStopAllButton';
import { disableStopButton } from './disableBoxTrackControls/disableStopButton';
import { renderGarageBoxes } from './renderGarageBoxes';
import { renderGarageOptions } from './renderGarageOptions';

export const garageView = async (store: IStore) => {
  const fragment$: DocumentFragment = new DocumentFragment();

  await renderGarageOptions(fragment$, store);
  renderGarageBoxes(store, fragment$);

  const garage$ = document.querySelector('#garage') as HTMLElement;
  garage$.innerHTML = '';

  garage$.prepend(fragment$);

  disableStopButton();
  disableStopAllButton();
};
