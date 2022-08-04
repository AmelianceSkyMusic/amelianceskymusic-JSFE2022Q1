import { createHTMLElem } from '../../../../../../asm-scripts';
import { THTMLParam } from '../../../../../types/types';
import { buttonRace } from './buttonRace';
import { buttonStop } from './buttonStop';

export const blockRaceButtons = async (elem$: THTMLParam) => {
  const optionsRaceButtons$ = createHTMLElem(elem$, 'div', {
    class: 'options__race-buttons',
  });
  buttonRace(optionsRaceButtons$);
  buttonStop(optionsRaceButtons$);
};
