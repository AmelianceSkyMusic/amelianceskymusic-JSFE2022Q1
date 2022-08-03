import { createHTMLElem } from '../../../../asm-scripts';
import { TCar, THTMLParam } from '../../../types/types';
import { renderTrackControls } from './renderTrackControls';
import { renderTrack } from './renderTrack';

export const renderCarBox = (elem$: THTMLParam, carObj: TCar) => {
  const box$ = createHTMLElem(elem$, 'div', { class: 'box' });

  renderTrackControls(box$, carObj);
  renderTrack(box$, carObj);
};
