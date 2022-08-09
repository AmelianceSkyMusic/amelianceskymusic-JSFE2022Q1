import { createHTMLElem } from '../../../../../../asm-scripts';
import { WinStore } from '../../../../../store/WinStore';
import { IStore, IWinner } from '../../../../../types/interfaces';
import { THTMLParam } from '../../../../../types/types';
import { updateWinnersModel } from '../../../winnersModel/updateWinnersModel';

export const time = async (elem$: THTMLParam, store: IStore) => {
  const time$ = createHTMLElem(elem$, 'div', { class: 'winners__col winners__time-name col-2' });
  const headingContainer$ = createHTMLElem(time$, 'div', { class: 'heading__container' });
  createHTMLElem(headingContainer$, 'h4', { class: 'h4 winners__time-heading' }, 'TIME');
  let buttonLabel = '↕';
  if (store.winnersSort !== 'id') buttonLabel = store.winnersSortOrder !== 'ASC' ? '↑' : '↓';
  if (store.winnersSort !== 'time') buttonLabel = '↕';
  const timeSort$ = createHTMLElem(headingContainer$, 'button', {
    class: 'button-sm button-icon-sm winners__time-sorting-btn',
  }, buttonLabel);

  timeSort$.addEventListener('click', () => {
    const sortOrder = store.winnersSortOrder !== 'ASC' ? 'ASC' : 'DESC';
    WinStore.updateSettings({ winnersSort: 'time', winnersSortOrder: sortOrder });
    updateWinnersModel();
  });

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
