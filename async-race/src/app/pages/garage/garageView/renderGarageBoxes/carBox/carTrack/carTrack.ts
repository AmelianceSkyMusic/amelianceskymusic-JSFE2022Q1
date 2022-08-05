import { createHTMLElem } from '../../../../../../../asm-scripts';
import { ICar } from '../../../../../../types/interfaces';
import { THTMLParam } from '../../../../../../types/types';
import { car } from './car';

export const carTrack = ({ carObj, elem$ }: { carObj: ICar; elem$: THTMLParam; }) => {
  const track$ = createHTMLElem(elem$, 'div', { class: 'track' });

  car(carObj, track$);
};
