import { createHTMLElem } from '../../../../../asm-scripts';
import { IStore } from '../../../../types/interfaces';
import { THTMLParam } from '../../../../types/types';
import { getNextCarPage } from '../../garageController/getNextCarPage';
import { getPrevCarPage } from '../../garageController/getPrevCarPage';

export const renderPaginationButtons = async (store: IStore, elem$: THTMLParam) => {
  const optionsPaginationButtons$ = createHTMLElem(elem$, 'div', {
    class: 'options__pagination-buttons',
  });

  createHTMLElem(optionsPaginationButtons$, 'p', {
    class: 'p2 pagination-counter',
  }, `${store.pageNumber} / ${store.pagesCount}`) as HTMLButtonElement;

  const paginationButtonPrev$ = createHTMLElem(optionsPaginationButtons$, 'button', {
    class: 'button-sm button-icon-sm pagination-button__prev',
  }, '←') as HTMLButtonElement;

  const paginationButtonNext$ = createHTMLElem(optionsPaginationButtons$, 'button', {
    class: 'button-sm button-icon-sm pagination-button__next',
  }, '→') as HTMLButtonElement;

  if (store.pageNumber <= 1) {
    paginationButtonPrev$.disabled = true;
    paginationButtonNext$.disabled = false;
  } else if (store.pageNumber >= store.pagesCount) {
    paginationButtonPrev$.disabled = false;
    paginationButtonNext$.disabled = true;
  }

  paginationButtonPrev$.addEventListener('click', getPrevCarPage);
  paginationButtonNext$.addEventListener('click', getNextCarPage);
};
