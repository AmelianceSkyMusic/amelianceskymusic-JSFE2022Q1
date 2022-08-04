import { TCar, THTMLParam } from '../../../../../types/types';
import { createHTMLElem } from '../../../../../../asm-scripts';
import { trackControls } from './trackControls';
import { carTrack } from './carTrack';

export const renderCarBox = (elem$: THTMLParam, carObj: TCar) => {
  const box$ = createHTMLElem(elem$, 'div', { class: 'box' });

  trackControls(box$, carObj);
  carTrack({ elem$: box$, carObj });
};
