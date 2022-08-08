import { createHTMLElem } from '../../../../../../../../../asm-scripts';
import { THTMLParam } from '../../../../../../../../types/types';
import { carStop } from '../../../../../action/carStop';

export const stopCar = (elem$: THTMLParam, id: number) => {
  createHTMLElem(elem$, 'button', {
    class: 'button-sm button-icon-sm controls_stop-button',
  }, '■')
    .addEventListener('click', async (event: Event) => {
      const el$ = event.target as HTMLButtonElement;

      carStop(id);

      el$.disabled = true;
      const stopButton$ = el$.parentNode?.querySelector(
        '.controls_run-button',
      ) as HTMLButtonElement;
      stopButton$.disabled = false;
    });
};
