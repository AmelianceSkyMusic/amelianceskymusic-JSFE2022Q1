import { createHTMLElem } from '../../../../../asm-scripts';
import { THTMLParam } from '../../../../types/types';
import { add100RandomCars } from '../../garageController/add100RandomCars';
import { updateModel } from '../../garageModel/updateModel';

export const renderGenerateCarsButton = (elem$: THTMLParam) => {
  const buttonGenerateCars$ = createHTMLElem(elem$, 'button', {
    class: 'button button-sm',
  }, '+100') as HTMLButtonElement;

  buttonGenerateCars$.addEventListener('click', () => {
    buttonGenerateCars$.disabled = true;
  });
  buttonGenerateCars$.addEventListener('click', add100RandomCars);
  buttonGenerateCars$.addEventListener('click', updateModel);
};
