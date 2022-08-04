import { createHTMLElem } from '../../../../../../../../asm-scripts';
import { carsTemplateData } from '../../../../../../../data/cars';
import { THTMLParam } from '../../../../../../../types/types';

export const inputCarBrand = async (elem$: THTMLParam) => {
  const selectBrands$ = createHTMLElem(elem$, 'select', {
    class: 'p2 create-car__brands',
  }) as HTMLSelectElement;

  carsTemplateData.brands.forEach((brand) => {
    createHTMLElem(selectBrands$, 'option', {
      attributes: `value=${brand}`,
    }, `${brand}`);
  });
};
