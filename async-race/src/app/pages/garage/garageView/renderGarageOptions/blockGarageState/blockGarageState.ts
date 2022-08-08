import { createHTMLElem } from '../../../../../../asm-scripts';
import { IStore } from '../../../../../types/interfaces';
import { THTMLParam } from '../../../../../types/types';
import { buttonGenerateCars } from './buttonGenerateCars/buttonGenerateCars';
import { blockPaginationButtons } from './blockPaginationButtons';
import { textCarsCount } from './textCarsCount';

export const blockGarageState = async (elem$: THTMLParam, store: IStore) => {
  const optionsCarsCount$ = createHTMLElem(elem$, 'div', {
    class: 'options__cars-count',
  });

  textCarsCount(optionsCarsCount$, store);
  buttonGenerateCars(optionsCarsCount$);
  blockPaginationButtons(optionsCarsCount$, store);
};
