import { createHTMLElem } from '../../../../../../../../../asm-scripts';
import { THTMLParam } from '../../../../../../../../types/types';
import { carDrive } from '../../../../../action/carDrive';

export const runCar = (elem$: THTMLParam, id: number) => {
  createHTMLElem(elem$, 'button', {
    class: 'button-sm button-icon-sm controls_run-button',
  }, '▶')
    .addEventListener('click', (event: Event) => {
      const el$ = event.target as HTMLButtonElement;
      el$.disabled = true;

      const stopButton$ = el$.parentNode?.querySelector(
        '.controls_stop-button',
      ) as HTMLButtonElement;
      stopButton$.disabled = false;
      setTimeout(async () => { carDrive(id); }, 0);
    });
};
