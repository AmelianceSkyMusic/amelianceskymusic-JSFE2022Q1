import { createHTMLElem } from '../../../../../../asm-scripts';
import { IStore, IWinner } from '../../../../../types/interfaces';
import { THTMLParam } from '../../../../../types/types';

export const time = async (elem$: THTMLParam, store: IStore) => {
  const time$ = createHTMLElem(elem$, 'div', { class: 'winners__col winners__time-name col-2' });

  createHTMLElem(time$, 'h4', { class: 'h4 winners__time-heading' }, 'TIME');
  const winnersTimeContainer$ = createHTMLElem(time$, 'div', {
    class: 'winners__col-container winners__time-container',
  });

  const winnersArr = store.winners as IWinner[];
  winnersArr.forEach(async (winner) => {
    createHTMLElem(winnersTimeContainer$, 'p1', {
      class: 'p1 сell winners__time-row',
    }, `${winner.time}`);
  });
};
