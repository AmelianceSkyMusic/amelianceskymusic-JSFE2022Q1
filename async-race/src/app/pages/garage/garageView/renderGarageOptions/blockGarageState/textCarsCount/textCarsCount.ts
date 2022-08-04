import { createHTMLElem } from '../../../../../../../asm-scripts';
import { IStore } from '../../../../../../types/interfaces';
import { THTMLParam } from '../../../../../../types/types';

export const textCarsCount = async (store: IStore, elem$: THTMLParam) => {
  createHTMLElem(elem$, 'h4', {
    class: 'h4',
  }, `Cars (${store.carsCount})`);
};
