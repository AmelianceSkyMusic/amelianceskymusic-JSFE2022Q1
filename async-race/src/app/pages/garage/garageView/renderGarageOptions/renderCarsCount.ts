import { createHTMLElem } from '../../../../../asm-scripts';
import { IStore } from '../../../../types/interfaces';
import { THTMLParam } from '../../../../types/types';
import { renderGenerateCarsButton } from './renderGenerateCarsButton';
import { renderPaginationButtons } from './renderPaginationButtons';

export const renderCarsCount = async (store: IStore, elem$: THTMLParam) => {
  console.log('store', store.carsCount);

  const optionsCarsCount$ = createHTMLElem(elem$, 'div', {
    class: 'options__cars-count',
  });

  createHTMLElem(optionsCarsCount$, 'h4', {
    class: 'h4',
  }, `Cars (${store.carsCount})`);

  renderGenerateCarsButton(optionsCarsCount$);
  renderPaginationButtons(store, optionsCarsCount$);
};
