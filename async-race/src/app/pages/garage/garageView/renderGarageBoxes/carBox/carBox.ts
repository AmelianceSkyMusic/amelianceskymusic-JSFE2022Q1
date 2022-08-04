import { TCar, THTMLParam } from '../../../../../types/types';
import { createHTMLElem } from '../../../../../../asm-scripts';
import { trackControls } from './trackControls';
import { carTrack } from './carTrack';

export const carBox = (carObj: TCar, elem$: THTMLParam) => {
  const box$ = createHTMLElem(elem$, 'div', { class: 'box' });

  trackControls(box$, carObj);
  carTrack({ carObj, elem$: box$ });
};
