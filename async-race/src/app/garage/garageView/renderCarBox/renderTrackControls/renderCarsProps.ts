import { createHTMLElem } from '../../../../../asm-scripts';
import { THTMLParam } from '../../../../types/types';

export const renderCarsProps = (elem$: THTMLParam) => {
  const controlsCarsProps$ = createHTMLElem(elem$, 'div', {
    class: 'controls__cars-props',
  });

  const carsPropCarRemoveButton = createHTMLElem(controlsCarsProps$, 'button', {
    class: 'button-sm button-icon-sm cars-prop_car-remove-button',
  }, '🗙');
  const carsPropEditButton = createHTMLElem(controlsCarsProps$, 'button', {
    class: 'button-sm button-icon-sm cars-prop_edit-button',
  }, '✎');
  const carsPropCarTitle = createHTMLElem(controlsCarsProps$, 'h3', {
    class: 'h4 cars-prop__car-title',
  }, 'Title');
};
