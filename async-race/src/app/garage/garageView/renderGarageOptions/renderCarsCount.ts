import { createHTMLElem } from '../../../../asm-scripts';
import API from '../../../API';
import { THTMLParam } from '../../../types/types';
import { add100RandomCars } from '../../garageController/add100RandomCars';

export const renderCarsCount = async (elem$: THTMLParam) => {
  const carsCount = await API.getCarsCount();

  const optionsCarsCount$ = createHTMLElem(elem$, 'div', {
    class: 'options__cars-count',
  });

  createHTMLElem(optionsCarsCount$, 'h4', {
    class: 'h4',
  }, `Cars (${carsCount})`);

  const buttonGenerateCars$ = createHTMLElem(optionsCarsCount$, 'button', {
    class: 'button button-sm',
  }, '+100');

  buttonGenerateCars$.addEventListener('click', add100RandomCars);
};
