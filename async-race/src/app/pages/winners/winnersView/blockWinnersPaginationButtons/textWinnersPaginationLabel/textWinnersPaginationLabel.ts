import { createHTMLElem } from '../../../../../../asm-scripts';
import { IStore } from '../../../../../types/interfaces';
import { THTMLParam } from '../../../../../types/types';

export const textWinnersPaginationLabel = async (elem$: THTMLParam, store: IStore) => {
  createHTMLElem(elem$, 'p', {
    class: 'p2 winners-pagination__counter',
  }, `${store.winnersPageNumber} / ${store.pagesWinnersCount}`) as HTMLButtonElement;
};
