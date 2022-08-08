import { createHTMLElem } from '../../../../../../../asm-scripts';
import { IStore } from '../../../../../../types/interfaces';
import { THTMLParam } from '../../../../../../types/types';

export const textCarsCount = async (elem$: THTMLParam, store: IStore) => {
  createHTMLElem(elem$, 'h4', {
    class: 'h4',
  }, `CARS: ${store.carsCount}`);
};
