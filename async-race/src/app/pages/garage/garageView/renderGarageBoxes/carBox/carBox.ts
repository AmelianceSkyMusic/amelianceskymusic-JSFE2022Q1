import { THTMLParam } from '../../../../../types/types';
import { createHTMLElem } from '../../../../../../asm-scripts';
import { trackControls } from './trackControls';
import { carTrack } from './carTrack';
import { ICar } from '../../../../../types/interfaces';

export const carBox = (carObj: ICar, elem$: THTMLParam) => {
  const box$ = createHTMLElem(elem$, 'div', { class: 'box' });

  trackControls(box$, carObj);
  carTrack({ carObj, elem$: box$ });
};
