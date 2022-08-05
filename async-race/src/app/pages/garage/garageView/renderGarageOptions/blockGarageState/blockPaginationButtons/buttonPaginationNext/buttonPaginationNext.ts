import { createHTMLElem } from '../../../../../../../../asm-scripts';
import { IStore } from '../../../../../../../types/interfaces';
import { THTMLParam } from '../../../../../../../types/types';
import { getNextCarPage } from '../../../../../garageController/getNextCarPage';

export const buttonPaginationNext = async (store: IStore, elem$: THTMLParam) => {
  const paginationButtonNext$ = createHTMLElem(elem$, 'button', {
    class: 'button-sm button-icon-sm pagination-button__next',
  }, '→') as HTMLButtonElement;

  if (store.pageNumber < store.pagesCount) {
    paginationButtonNext$.disabled = false;
  } else if (store.pageNumber >= store.pagesCount) {
    paginationButtonNext$.disabled = true;
  }

  paginationButtonNext$.addEventListener('click', getNextCarPage);
};
