import { createHTMLElem } from '../../../../../../../asm-scripts';
import API from '../../../../../../API';
import { carsTemplateData } from '../../../../../../data/cars';
import { THTMLParam } from '../../../../../../types/types';
import { updateModel } from '../../../../garageModel/updateModel';

export const buttonCreate = async (elem$: THTMLParam) => {
  const carButtonCreate$ = createHTMLElem(elem$, 'button', {
    class: 'button button-sm create-car__create',
  }, 'create');

  carButtonCreate$.addEventListener('click', async () => {
    const createButtonModelTemp$ = document.querySelector(
      '.create-car__models',
    ) as HTMLInputElement;
    const createCarColor$ = document.querySelector('.create-car__color') as HTMLInputElement;
    const createCarBrands$ = document.querySelector('.create-car__brands') as HTMLSelectElement;

    let name = createButtonModelTemp$.value;

    const brand = carsTemplateData.brands[createCarBrands$.selectedIndex];

    name = (`${brand} ${name}`).trim();

    const newCarProps = { name, color: `${createCarColor$.value}` };
    await API.createCar(newCarProps);
    updateModel();
  });
};
