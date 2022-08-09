import { createHTMLElem } from '../../../../../../asm-scripts';
import { IStore, IWinner } from '../../../../../types/interfaces';
import { THTMLParam } from '../../../../../types/types';

export const number = async (elem$: THTMLParam, store: IStore) => {
  const num$ = createHTMLElem(elem$, 'div', { class: 'winners__col winners__col-number col-2' });

  createHTMLElem(num$, 'h4', { class: 'h4 winners__num-heading' }, 'NUM');
  const winnersNumContainer$ = createHTMLElem(num$, 'div', {
    class: 'winners__col-container winners__num-container',
  });
  const winnersArr = store.winners as IWinner[];

  winnersArr.forEach((_, i) => {
    createHTMLElem(winnersNumContainer$, 'p1', { class: 'p1 сell winners__num-row' }, `${i + 1}`);
  });
};
