import { createHTMLElem } from '../../../../asm-scripts';
import { THTMLParam } from '../../../types/types';
import { renderTrackControls } from './renderTrackControls';
import { renderTrack } from './renderTrack';

export const renderCarBox = (elem$: THTMLParam) => {
  const box$ = createHTMLElem(elem$, 'div', { class: 'box' });

  renderTrackControls(box$);
  renderTrack(box$);
};
