import { createHTMLElem } from '../../../../../../asm-scripts';
import { THTMLParam } from '../../../../../types/types';
import { blockCreatetCarInputParam } from './blockCreatetCarInputParam';
import { buttonCreate } from './buttonCreate';

export const blockCreateCar = async (elem$: THTMLParam) => {
  const optionsCreateCar$ = createHTMLElem(elem$, 'div', {
    class: 'options__create-car',
  });

  blockCreatetCarInputParam(optionsCreateCar$);
  buttonCreate(optionsCreateCar$);
};
