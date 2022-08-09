import { createHTMLElem } from '../../../../../../asm-scripts';
import { IStore } from '../../../../../types/interfaces';
import { THTMLParam } from '../../../../../types/types';
import { getWinnersNextCarPage } from '../../../winnersController/getWinnersNextCarPage';

export const buttonWinnersPaginationNext = async (elem$: THTMLParam, store: IStore) => {
  const paginationButtonNext$ = createHTMLElem(elem$, 'button', {
    class: 'button-sm button-icon-sm pagination-button__next',
  }, '→') as HTMLButtonElement;

  if (store.winnersPageNumber < store.pagesWinnersCount) {
    paginationButtonNext$.disabled = false;
  } else if (store.winnersPageNumber >= store.pagesWinnersCount) {
    paginationButtonNext$.disabled = true;
  }

  paginationButtonNext$.addEventListener('click', getWinnersNextCarPage);
};
