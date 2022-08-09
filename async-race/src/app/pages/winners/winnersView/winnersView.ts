import { IStore } from '../../../types/interfaces';
import { renderWinners } from './renderWinners/renderWinners';

export const winnersView = async (store: IStore) => {
  const fragment$: DocumentFragment = new DocumentFragment();

  await renderWinners(fragment$, store);

  const garage$ = document.querySelector('#winners') as HTMLElement;
  garage$.innerHTML = '';

  garage$.prepend(fragment$);
};
