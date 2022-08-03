import { createHTMLElem } from '../../../../asm-scripts';
import { THTMLParam } from '../../../types/types';

export const renderRaceButtons = async (elem$: THTMLParam) => {
  const optionsRaceButtons$ = createHTMLElem(elem$, 'div', {
    class: 'options__race-buttons',
  });

  const raceButtonsRace = createHTMLElem(optionsRaceButtons$, 'h4', {
    class: 'button button-sm race-buttons__race',
  }, 'RACE');

  const raceButtonsReset = createHTMLElem(optionsRaceButtons$, 'h4', {
    class: 'button button-sm race-buttons__reset',
  }, 'RESET');
};
