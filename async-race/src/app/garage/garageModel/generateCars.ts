import { getRandomNumber } from '../../../asm-scripts';
import { getRandomHEXColor } from '../../../asm-scripts/getRandomHEXColor';
import { carsTemplateData } from '../../data/cars';

export const generateCars = (count: number) => {
  const randomCars = [];

  const { brands } = carsTemplateData;
  const { models } = carsTemplateData;
  for (let i = 0; i < count; i++) {
    const randomCar = {
      color: getRandomHEXColor(),
      name: `${brands[getRandomNumber(0, 19)]} ${models[getRandomNumber(0, 49)]}`,
    };
    randomCars.push(randomCar);
  }
  return randomCars;
};
