import { createHTMLElem } from '../../../../../../../asm-scripts';
import { THTMLParam } from '../../../../../../types/types';

export const buttonRace = async (elem$: THTMLParam) => {
  createHTMLElem(elem$, 'h4', {
    class: 'button button-sm race-buttons__race',
  }, 'RACE');
};
