import { createHTMLElem } from '../../../../../../asm-scripts';
import API from '../../../../../API';
import { IStore, IWinner } from '../../../../../types/interfaces';
import { THTMLParam } from '../../../../../types/types';

export const carName = async (elem$: THTMLParam, store: IStore) => {
  const carName$ = createHTMLElem(elem$, 'div', {
    class: 'winners__col winners__col-car-name col-2',
  });
  createHTMLElem(carName$, 'h4', { class: 'h4 winners__car-name-heading' }, 'NAME');
  const winnersCarNameContainer$ = createHTMLElem(carName$, 'div', {
    class: 'winners__col-container winners__car-name-container',
  });

  const winnersArr = store.winners as IWinner[];
  winnersArr.forEach(async (winner) => {
    const { id } = winner;
    const car = await API.getCar(id);
    createHTMLElem(winnersCarNameContainer$, 'p1', {
      class: 'p1 сell winners__car-name',
    }, `${car.name}`);
  });
};
