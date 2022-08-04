import { createHTMLElem } from '../../../../../../../asm-scripts';
import { THTMLParam } from '../../../../../../types/types';

export const buttonStop = async (elem$: THTMLParam) => {
  createHTMLElem(elem$, 'h4', {
    class: 'button button-sm race-buttons__reset',
  }, 'STOP');
};
