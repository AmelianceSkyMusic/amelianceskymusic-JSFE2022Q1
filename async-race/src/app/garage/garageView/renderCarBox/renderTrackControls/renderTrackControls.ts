import { createHTMLElem } from '../../../../../asm-scripts';
import { TCar, THTMLParam } from '../../../../types/types';
import { renderCarsAction } from './renderCarsAction';
import { renderCarsProps } from './renderCarsProps';

export const renderTrackControls = (elem$: THTMLParam, carObj: TCar) => {
  const controls$ = createHTMLElem(elem$, 'div', { class: 'controls' });

  renderCarsProps(controls$, carObj);
  renderCarsAction(controls$);
};
