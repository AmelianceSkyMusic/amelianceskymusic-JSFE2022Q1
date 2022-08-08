import { createHTMLElem } from '../../../../../../../asm-scripts';
import { IStore } from '../../../../../../types/interfaces';
import { THTMLParam } from '../../../../../../types/types';
import { buttonPaginationNext } from './buttonPaginationNext';
import { buttonPaginationPrev } from './buttonPaginationPrev';
import { textPaginationLabel } from './textPaginationLabel';

export const blockPaginationButtons = async (elem$: THTMLParam, store: IStore) => {
  const optionsPaginationButtons$ = createHTMLElem(elem$, 'div', {
    class: 'options__pagination-buttons',
  });

  textPaginationLabel(optionsPaginationButtons$, store);
  buttonPaginationPrev(optionsPaginationButtons$, store);
  buttonPaginationNext(optionsPaginationButtons$, store);
};
