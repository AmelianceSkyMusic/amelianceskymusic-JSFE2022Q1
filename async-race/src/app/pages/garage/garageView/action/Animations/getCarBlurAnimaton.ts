export const getCarBlurAnimaton = (coof: number) => [
  { filter: 'blur(0px)' },
  { filter: `blur(${coof * 0.006}px)` },
  { filter: `blur(${coof * 0.006}px)` },
  { filter: 'blur(0px)' },
];
