import { createHTMLElem } from '../../../../../../../asm-scripts';
import API from '../../../../../../API';
import { ICar, IStore } from '../../../../../../types/interfaces';
import { THTMLParam } from '../../../../../../types/types';
import { updateModel } from '../../../../garageModel/updateModel';
import { carStop } from '../../../action/carStop';
import { disableStopAllButton } from '../../../disableBoxTrackControls/disableStopAllButton';
import { removeWinnerAlert } from '../../../winnerAlert/removeWinnerAlert';

export const carStopEngine = async (id: number) => {
  await API.stopCarSEngine(id);
};

export const buttonStop = async (elem$: THTMLParam, store: IStore) => {
  createHTMLElem(elem$, 'button', {
    class: 'button button-sm race-buttons__reset',
  }, 'RESET')
    .addEventListener('click', () => {
      disableStopAllButton();
      const cars = store.cars as ICar[];
      cars.forEach(async (car) => {
        await carStopEngine(car.id);
      });
      cars.forEach((car) => {
        carStop(car.id);
      });
      removeWinnerAlert();
      updateModel();
    });
};
