import { createHTMLElem } from '../../../../../../asm-scripts';
import { WinStore } from '../../../../../store/WinStore';
import { IStore, IWinner } from '../../../../../types/interfaces';
import { THTMLParam } from '../../../../../types/types';
import { updateWinnersModel } from '../../../winnersModel/updateWinnersModel';

export const wins = async (elem$: THTMLParam, store: IStore) => {
  const wins$ = createHTMLElem(elem$, 'div', { class: 'winners__col winners__wins-name col-2' });
  const headingContainer$ = createHTMLElem(wins$, 'div', { class: 'heading__container' });
  createHTMLElem(headingContainer$, 'h4', { class: 'h4 winners__wins-heading' }, 'WINS');
  let buttonLabel = '↕';
  if (store.winnersSort !== 'id') buttonLabel = store.winnersSortOrder !== 'ASC' ? '↑' : '↓';
  if (store.winnersSort !== 'wins') buttonLabel = '↕';
  const winsSort$ = createHTMLElem(headingContainer$, 'button', {
    class: 'button-sm button-icon-sm winners__wins-sorting-btn',
  }, buttonLabel);

  winsSort$.addEventListener('click', () => {
    const sortOrder = store.winnersSortOrder !== 'ASC' ? 'ASC' : 'DESC';
    WinStore.updateSettings({ winnersSort: 'wins', winnersSortOrder: sortOrder });
    updateWinnersModel();
  });

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
