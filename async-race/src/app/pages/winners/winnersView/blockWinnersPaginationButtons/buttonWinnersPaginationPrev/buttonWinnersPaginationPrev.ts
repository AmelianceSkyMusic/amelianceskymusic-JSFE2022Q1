import { createHTMLElem } from '../../../../../../asm-scripts';
import { IStore } from '../../../../../types/interfaces';
import { THTMLParam } from '../../../../../types/types';
import { getWinnersPrevCarPage } from '../../../winnersController/getWinnersPrevCarPage';

export const buttonWinnersPaginationPrev = async (elem$: THTMLParam, store: IStore) => {
  const paginationButtonPrev$ = createHTMLElem(elem$, 'button', {
    class: 'button-sm button-icon-sm pagination-button__prev',
  }, '←') as HTMLButtonElement;

  if (store.winnersPageNumber <= 1) {
    paginationButtonPrev$.disabled = true;
  } else if (store.winnersPageNumber >= store.pagesWinnersCount) {
    paginationButtonPrev$.disabled = false;
  }

  paginationButtonPrev$.addEventListener('click', getWinnersPrevCarPage);
};
