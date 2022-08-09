import Lottie from 'lottie-web';
import { createHTMLElem } from '../../../../../asm-scripts';

export const renderAlert = (content$: DocumentFragment) => {
  const fragment$: DocumentFragment = new DocumentFragment();
  const popup$ = createHTMLElem(fragment$, 'div', { class: 'alert show' });
  popup$.append(content$);
  return fragment$;
};

export const renderWinnerAlert = (winnerName: string, winnerTime: number, winnerId: number) => {
  const fragment$: DocumentFragment = new DocumentFragment();

  const confettiAnimationContainer$ = createHTMLElem(fragment$, 'div', {
    class: 'confetti-animation-container',
  });
  createHTMLElem(fragment$, 'h2', {
    class: 'h2',
  }, `${winnerName} WIN! Time: ${winnerTime}s`);
  Lottie.loadAnimation({
    container: confettiAnimationContainer$,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './assets/json/confetti.json',
    rendererSettings: {
      progressiveLoad: true,
      hideOnTransparent: true,
    },
  });

  const popup$ = renderAlert(fragment$);
  const car$ = document.querySelector(`[data-id="${winnerId}"]`) as HTMLDivElement;
  const carBox$ = car$.closest('.track') as HTMLDivElement;
  carBox$.prepend(popup$);
};
