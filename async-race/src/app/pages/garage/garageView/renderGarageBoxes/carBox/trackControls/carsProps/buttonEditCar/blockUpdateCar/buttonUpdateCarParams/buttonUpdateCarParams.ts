import { createHTMLElem } from '../../../../../../../../../../../asm-scripts';
import API from '../../../../../../../../../../API';
import { carsTemplateData } from '../../../../../../../../../../data/cars';
import { ICar } from '../../../../../../../../../../types/interfaces';
import { THTMLParam } from '../../../../../../../../../../types/types';
import { updateModel } from '../../../../../../../../garageModel/updateModel';

export const buttonUpdateCarParams = async (elem$: THTMLParam, carObj: ICar) => {
  const carButtonCreate$ = createHTMLElem(elem$, 'button', {
    class: 'button button-sm create-car__create',
  }, 'update') as HTMLButtonElement;

  carButtonCreate$.addEventListener('click', async () => {
    const createCarBrands$ = document.querySelector(
      '.cars-update-input__brand',
    ) as HTMLSelectElement;
    const createCarColor$ = document.querySelector('.cars-update-input__color') as HTMLInputElement;
    const createButtonModelTemp$ = document.querySelector(
      '.cars-update-input__model',
    ) as HTMLInputElement;

    let name = createButtonModelTemp$.value;

    const brand = carsTemplateData.brands[createCarBrands$.selectedIndex];

    name = (`${brand} ${name}`).trim();

    const newCarProps = { id: carObj.id, name, color: `${createCarColor$.value}` };

    await API.updateCar(newCarProps);
    await updateModel();
  });
};
