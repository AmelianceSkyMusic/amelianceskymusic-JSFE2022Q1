import { createHTMLElem } from '../../../../../../asm-scripts';
import API from '../../../../../API';
import { IStore, IWinner } from '../../../../../types/interfaces';
import { THTMLParam } from '../../../../../types/types';

export const wins = async (elem$: THTMLParam, store: IStore) => {
  const wins$ = createHTMLElem(elem$, 'div', { class: 'winners__col winners__wins-name col-2' });

  createHTMLElem(wins$, 'h4', { class: 'h4 winners__wins-heading' }, 'WINS');
  const winnersWinsContainer$ = createHTMLElem(wins$, 'div', {
    class: 'winners__col-container winners__wins-container',
  });

  const winnersArr = store.winners as IWinner[];
  winnersArr.forEach(async (winner) => {
    createHTMLElem(winnersWinsContainer$, 'p1', {
      class: 'p1 сell winners__wins-row',
    }, `${winner.wins}`);
  });
};
