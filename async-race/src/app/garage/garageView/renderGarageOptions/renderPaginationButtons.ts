import { createHTMLElem } from '../../../../asm-scripts';
import { THTMLParam } from '../../../types/types';

export const renderPaginationButtons = async (elem$: THTMLParam) => {
  const optionsPaginationButtons$ = createHTMLElem(elem$, 'div', {
    class: 'options__pagination-buttons',
  });

  const paginationButtonPrev$ = createHTMLElem(optionsPaginationButtons$, 'button', {
    class: 'button-sm button-icon-sm pagination-button__prev',
  }, '←');

  const paginationButtonNext$ = createHTMLElem(optionsPaginationButtons$, 'button', {
    class: 'button-sm button-icon-sm pagination-button__next',
  }, '→');

  paginationButtonPrev$.addEventListener('click', () => { console.log('←'); });
  paginationButtonNext$.addEventListener('click', () => { console.log('←'); });
};
