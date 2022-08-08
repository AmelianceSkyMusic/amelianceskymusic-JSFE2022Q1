import { createHTMLElem } from '../../../../../../../asm-scripts';
import { ICar, IStore } from '../../../../../../types/interfaces';
import { THTMLParam } from '../../../../../../types/types';
import { carDriveAll } from '../../../action/carDriveAll';
import { disableAdd100Button } from '../../../disableBoxTrackControls/disableAdd100Button';
import { disableCarRemoveButton } from '../../../disableBoxTrackControls/disableCarRemoveButton';
import { disableCreateButton } from '../../../disableBoxTrackControls/disableCreateButton';
import { disableEditButton } from '../../../disableBoxTrackControls/disableEditButton';
import {
  disablePaginationNextButton,
} from '../../../disableBoxTrackControls/disablePaginationNextButton';
import {
  disablePaginationPrevButton,
} from '../../../disableBoxTrackControls/disablePaginationPrevButton';
import { disableRaceAllButton } from '../../../disableBoxTrackControls/disableRaceAllButton';
import { disableRaceButton } from '../../../disableBoxTrackControls/disableRaceButton';

export const buttonRace = async (elem$: THTMLParam, store: IStore) => {
  createHTMLElem(elem$, 'button', {
    class: 'button button-sm race-buttons__race',
  }, 'RACE')
    .addEventListener('click', () => {
      const cars = store.cars as ICar[];
      disableAdd100Button();
      disableCreateButton();
      disablePaginationPrevButton();
      disablePaginationNextButton();

      disableRaceAllButton();

      disableCarRemoveButton();
      disableEditButton();

      disableRaceButton();

      carDriveAll(cars);
    });
};
