import { createHTMLElem } from '../../../../../../../../asm-scripts';
import { TCar, THTMLParam } from '../../../../../../../types/types';

export const carsProps = (elem$: THTMLParam, carObj: TCar) => {
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
  }, `${carObj.name}`);
};
