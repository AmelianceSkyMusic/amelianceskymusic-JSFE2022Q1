import { createHTMLElem } from '../../../../../../../../../../../../asm-scripts';
import { carsTemplateData } from '../../../../../../../../../../../data/cars';
import { ICar } from '../../../../../../../../../../../types/interfaces';
import { THTMLParam } from '../../../../../../../../../../../types/types';

export const inputCarBrand = async (elem$: THTMLParam, carObj: ICar) => {
  const selectBrands$ = createHTMLElem(elem$, 'select', {
    class: 'p2 cars-update-input__brand',
  }) as HTMLSelectElement;

  carsTemplateData.brands.forEach((brand) => {
    createHTMLElem(selectBrands$, 'option', {
      attributes: [`value="${brand}"`],
    }, `${brand}`);
  });

  const carName = carObj.name;
  const carBrand = carName.split(' ')[0];

  selectBrands$.value = carBrand;
};
