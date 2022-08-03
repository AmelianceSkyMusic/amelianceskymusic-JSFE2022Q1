import { createHTMLElem } from '../../../../asm-scripts';
import { carsTemplateData } from '../../../data/cars';
import { THTMLParam } from '../../../types/types';

export const renderCreateCar = async (elem$: THTMLParam) => {
  const optionsCreateCar$ = createHTMLElem(elem$, 'div', {
    class: 'options__create-car',
  });

  const createCarInputs$ = createHTMLElem(optionsCreateCar$, 'div', {
    class: 'create-car__inputs',
  });

  const createButtonBrands$ = createHTMLElem(createCarInputs$, 'select', {
    class: 'p2 create-car__brands',
  });

  carsTemplateData.brands.forEach((brand) => {
    createHTMLElem(createButtonBrands$, 'option', {
      attributes: `value=${brand}`,
    }, `${brand}`);
  });

  const createButtonModel = createHTMLElem(createCarInputs$, 'input', {
    class: 'p2 create-car__models', attributes: 'type="text" maxlength="20"',
  });

  const createButtonColor = createHTMLElem(createCarInputs$, 'input', {
    class: 'input-color create-car__color', attributes: 'type="color" value="#65b6cb"',
  });

  const createCarButtonCreate = createHTMLElem(optionsCreateCar$, 'button', {
    class: 'button button-sm create-car__create',
  }, 'create');
};
