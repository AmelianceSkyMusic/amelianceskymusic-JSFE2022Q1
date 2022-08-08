export const getCarTimingAnimation = (duration: number): { [key: string]: string | number } => ({
  duration,
  iterations: 1,
  fill: 'forwards',
  easing: 'cubic-bezier(0.2,0,0.8,1)',
});
