import API from '../../../../API';

export const carStop = (id: number) => {
  const car$ = document.querySelector(`[data-id="${id}"]`) as HTMLDivElement;
  const carAnimations = car$.getAnimations();
  API.stopCarSEngine(id);
  carAnimations.forEach((animation) => animation.cancel());
  car$.style.transform = 'translateX(0)';
  car$.classList.remove('show-smoke');
};
