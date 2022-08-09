import { createHTMLElem } from '../../../../../asm-scripts';
import { IStore } from '../../../../types/interfaces';
import { THTMLParam } from '../../../../types/types';
import {
  blockWinnersPaginationButtons,
} from '../blockWinnersPaginationButtons/blockWinnersPaginationButtons';

import { car } from '../renderCols/car/car';
import { carName } from '../renderCols/carName/carName';
import { number } from '../renderCols/number/number';
import { time } from '../renderCols/time/time';
import { wins } from '../renderCols/wins/wins';

export const renderWinners = async (elem$: THTMLParam, store: IStore) => {
  console.log(store);

  createHTMLElem(elem$, 'h2', {
    class: 'h2 winners__heading col-6',
  }, `WINNERS: ${store.winnersCount}`);
  blockWinnersPaginationButtons(elem$, store);
  const winnersTable$ = createHTMLElem(elem$, 'div', { class: 'winners__table row col-12' });
  number(winnersTable$, store);
  car(winnersTable$, store);
  carName(winnersTable$, store);
  wins(winnersTable$, store);
  time(winnersTable$, store);
};
