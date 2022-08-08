import { createHTMLElem } from '../../../../../../../../asm-scripts';
import { IStore } from '../../../../../../../types/interfaces';
import { THTMLParam } from '../../../../../../../types/types';
import { getPrevCarPage } from '../../../../../garageController/getPrevCarPage';

export const buttonPaginationPrev = async (elem$: THTMLParam, store: IStore) => {
  const paginationButtonPrev$ = createHTMLElem(elem$, 'button', {
    class: 'button-sm button-icon-sm pagination-button__prev',
  }, '←') as HTMLButtonElement;

  if (store.pageNumber <= 1) {
    paginationButtonPrev$.disabled = true;
  } else if (store.pageNumber >= store.pagesCount) {
    paginationButtonPrev$.disabled = false;
  }

  paginationButtonPrev$.addEventListener('click', getPrevCarPage);
};
