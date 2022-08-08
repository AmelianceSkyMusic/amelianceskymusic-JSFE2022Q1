export const getCarMoveAnimation = (start: number, end: number) => [
  { transform: `translateX(${start}px)` },
  {},
  {},
  { transform: `translateX(${end}px)` },
];
