import { createHTMLElem } from '../../../../../../asm-scripts';
import { IStore } from '../../../../../types/interfaces';
import { THTMLParam } from '../../../../../types/types';
import { buttonRace } from './buttonRace';
import { buttonStop } from './buttonStop';

export const blockRaceButtons = async (elem$: THTMLParam, store: IStore) => {
  const optionsRaceButtons$ = createHTMLElem(elem$, 'div', {
    class: 'options__race-buttons',
  });
  buttonRace(optionsRaceButtons$, store);
  buttonStop(optionsRaceButtons$, store);
};
