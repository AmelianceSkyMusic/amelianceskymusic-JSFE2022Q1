import { createHTMLElem } from '../../../../../../../../asm-scripts';
import { IStore } from '../../../../../../../types/interfaces';
import { THTMLParam } from '../../../../../../../types/types';

export const textPaginationLabel = async (elem$: THTMLParam, store: IStore) => {
  createHTMLElem(elem$, 'p', {
    class: 'p2 pagination-counter',
  }, `${store.pageNumber} / ${store.pagesCount}`) as HTMLButtonElement;
};
