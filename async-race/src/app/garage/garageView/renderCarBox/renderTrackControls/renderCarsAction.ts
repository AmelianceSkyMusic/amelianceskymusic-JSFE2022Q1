import { createHTMLElem } from '../../../../../asm-scripts';
import { THTMLParam } from '../../../../types/types';

export const renderCarsAction = (elem$: THTMLParam) => {
  const controlsCarsAction$ = createHTMLElem(elem$, 'div', { class: 'controls__cars-action' });

  const controlsStopButton$ = createHTMLElem(controlsCarsAction$, 'button', {
    class: 'button-sm button-icon-sm controls_stop-button',
  }, '■');

  const controlsRunButton$ = createHTMLElem(controlsCarsAction$, 'button', {
    class: 'button-sm button-icon-sm controls_run-button',
  }, '▶');
};
