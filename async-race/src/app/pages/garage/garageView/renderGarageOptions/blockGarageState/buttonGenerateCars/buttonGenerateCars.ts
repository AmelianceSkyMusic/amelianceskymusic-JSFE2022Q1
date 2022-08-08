import { createHTMLElem } from '../../../../../../../asm-scripts';
import { THTMLParam } from '../../../../../../types/types';
import { add100RandomCars } from '../../../../garageController/add100RandomCars';
import { updateModel } from '../../../../garageModel/updateModel';

export const buttonGenerateCars = (elem$: THTMLParam) => {
  const buttonGenerateCars$ = createHTMLElem(elem$, 'button', {
    class: 'button button-sm state__add-cars',
  }, '+100') as HTMLButtonElement;

  buttonGenerateCars$.addEventListener('click', () => {
    buttonGenerateCars$.disabled = true;
    setTimeout(async () => {
      await add100RandomCars();
      updateModel();
    }, 0);
  });
};
