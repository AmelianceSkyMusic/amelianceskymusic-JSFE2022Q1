import { createHTMLElem } from '../../../../../asm-scripts';
import { THTMLParam } from '../../../../types/types';
import { renderCarsAction } from './renderCarsAction';
import { renderCarsProps } from './renderCarsProps';

export const renderTrackControls = (elem$: THTMLParam) => {
  const controls$ = createHTMLElem(elem$, 'div', { class: 'controls' });

  renderCarsProps(controls$);
  renderCarsAction(controls$);
};
