import { createHTMLElem } from '../../../../../../../asm-scripts';
import { TCar, THTMLParam } from '../../../../../../types/types';
import { car } from './car';

export const carTrack = ({ carObj, elem$ }: { carObj: TCar; elem$: THTMLParam; }) => {
  const track$ = createHTMLElem(elem$, 'div', { class: 'track' });

  car(carObj, track$);
};
