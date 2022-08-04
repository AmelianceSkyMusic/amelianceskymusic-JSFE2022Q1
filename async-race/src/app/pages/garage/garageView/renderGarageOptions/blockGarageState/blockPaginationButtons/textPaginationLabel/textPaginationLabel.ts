import { createHTMLElem } from '../../../../../../../../asm-scripts';
import { IStore } from '../../../../../../../types/interfaces';
import { THTMLParam } from '../../../../../../../types/types';

export const textPaginationLabel = async (store: IStore, elem$: THTMLParam) => {
  createHTMLElem(elem$, 'p', {
    class: 'p2 pagination-counter',
  }, `${store.pageNumber} / ${store.pagesCount}`) as HTMLButtonElement;
};
