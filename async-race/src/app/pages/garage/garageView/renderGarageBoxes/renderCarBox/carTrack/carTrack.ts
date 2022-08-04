import { createHTMLElem } from '../../../../../../../asm-scripts';
import { TCar, THTMLParam } from '../../../../../../types/types';
import { car } from './car';

export const carTrack = ({ elem$, carObj }: { elem$: THTMLParam; carObj: TCar; }) => {
  const track$ = createHTMLElem(elem$, 'div', { class: 'track' });

  car(track$, carObj);
};
