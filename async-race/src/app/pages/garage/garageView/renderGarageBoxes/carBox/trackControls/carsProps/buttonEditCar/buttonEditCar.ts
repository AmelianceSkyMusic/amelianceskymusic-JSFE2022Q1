import { createHTMLElem } from '../../../../../../../../../asm-scripts';
import { ICar } from '../../../../../../../../types/interfaces';
import { THTMLParam } from '../../../../../../../../types/types';
import {
  disableCarRemoveButton,
} from '../../../../../disableBoxTrackControls/disableCarRemoveButton';
import { disableEditButton } from '../../../../../disableBoxTrackControls/disableEditButton';
import { blockUpdateCar } from './blockUpdateCar';

export const buttonEditCar = (elem$: THTMLParam, carObj: ICar) => {
  createHTMLElem(elem$, 'button', {
    class: 'button-sm button-icon-sm cars-prop_edit-button',
  }, '✎')
    .addEventListener('click', () => {
      disableCarRemoveButton();
      disableEditButton();
      blockUpdateCar(elem$, carObj);
    });
};
