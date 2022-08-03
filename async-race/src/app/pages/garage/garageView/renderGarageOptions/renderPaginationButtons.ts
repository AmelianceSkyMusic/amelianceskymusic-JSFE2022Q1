import { createHTMLElem } from '../../../../../asm-scripts';
import { Store } from '../../../../store/Store';
import { THTMLParam } from '../../../../types/types';
import { getNextCarPage } from '../../garageController/getNextCarPage';
import { getPrevCarPage } from '../../garageController/getPrevCarPage';

export const renderPaginationButtons = async (elem$: THTMLParam) => {
  const optionsPaginationButtons$ = createHTMLElem(elem$, 'div', {
    class: 'options__pagination-buttons',
  });

  const paginationButtonPrev$ = createHTMLElem(optionsPaginationButtons$, 'button', {
    class: 'button-sm button-icon-sm pagination-button__prev',
  }, '←') as HTMLButtonElement;

  const paginationButtonNext$ = createHTMLElem(optionsPaginationButtons$, 'button', {
    class: 'button-sm button-icon-sm pagination-button__next',
  }, '→') as HTMLButtonElement;

  paginationButtonPrev$.addEventListener('click', getPrevCarPage);
  paginationButtonNext$.addEventListener('click', getNextCarPage);

  paginationButtonPrev$.addEventListener('click', () => {
    const pageNumber = Store.getValue('pageNumber');
    if (pageNumber <= 1) {
      paginationButtonPrev$.disabled = true;
      paginationButtonNext$.disabled = false;
    }
  });
  paginationButtonNext$.addEventListener('click', () => {
    const pageNumber = Store.getValue('pageNumber');
    const carsLimitPerPage = Store.getValue('carsLimitPerPage');
    if (pageNumber >= carsLimitPerPage) {
      paginationButtonPrev$.disabled = false;
      paginationButtonNext$.disabled = true;
    }
  });
};
