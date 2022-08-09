import { createHTMLElem } from '../../../../../asm-scripts';
import { IStore } from '../../../../types/interfaces';
import { THTMLParam } from '../../../../types/types';
import {
  buttonWinnersPaginationNext,
} from './buttonWinnersPaginationNext/buttonWinnersPaginationNext';
import {
  buttonWinnersPaginationPrev,
} from './buttonWinnersPaginationPrev/buttonWinnersPaginationPrev';
import {
  textWinnersPaginationLabel,
} from './textWinnersPaginationLabel/textWinnersPaginationLabel';

export const blockWinnersPaginationButtons = async (elem$: THTMLParam, store: IStore) => {
  const optionsPaginationButtons$ = createHTMLElem(elem$, 'div', {
    class: 'winners__pagination row col-6',
  });

  buttonWinnersPaginationPrev(optionsPaginationButtons$, store);
  textWinnersPaginationLabel(optionsPaginationButtons$, store);
  buttonWinnersPaginationNext(optionsPaginationButtons$, store);
};
