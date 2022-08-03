import { createHTMLElem } from '../../../../../asm-scripts';
import API from '../../../../API';
import { THTMLParam } from '../../../../types/types';
import { renderGenerateCarsButton } from './renderGenerateCarsButton';
import { renderPaginationButtons } from './renderPaginationButtons';

export const renderCarsCount = async (elem$: THTMLParam) => {
  const carsCount = await API.getCarsCount();

  const optionsCarsCount$ = createHTMLElem(elem$, 'div', {
    class: 'options__cars-count',
  });

  createHTMLElem(optionsCarsCount$, 'h4', {
    class: 'h4',
  }, `Cars (${carsCount})`);

  renderGenerateCarsButton(optionsCarsCount$);
  renderPaginationButtons(optionsCarsCount$);
};
