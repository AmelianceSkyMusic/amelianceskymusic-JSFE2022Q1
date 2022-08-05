import { createHTMLElem } from '../../../../../../../../../asm-scripts';
import API from '../../../../../../../../API';
import { Store } from '../../../../../../../../store/Store';
import { ICar } from '../../../../../../../../types/interfaces';
import { THTMLParam } from '../../../../../../../../types/types';
import { updateModel } from '../../../../../../garageModel/updateModel';

export const buttonRemoveCar = (elem$: THTMLParam, carObj: ICar) => {
  createHTMLElem(elem$, 'button', {
    class: 'button-sm button-icon-sm cars-prop_car-remove-button',
  }, '🗙')
    .addEventListener('click', (event: Event) => {
      const el$ = event.target as HTMLButtonElement;
      el$.disabled = true;
      updateModel();
      setTimeout(async () => {
        await API.deleteCar(+carObj.id);
        const carsCount = Number(await API.getCarsCount());
        if (!(carsCount % 7)) {
          let pageNumber = +Store.getValue('pageNumber');
          pageNumber -= 1;
          if (pageNumber < 1) pageNumber = 1;
          Store.updateSettings({ pageNumber });
        }
        updateModel();
      }, 0);
    });
};
