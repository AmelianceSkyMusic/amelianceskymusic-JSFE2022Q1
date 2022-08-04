import API from '../../../API';
import { generateCars } from '../garageModel/generateCars';

export const add100RandomCars = async () => {
  const randomCars = generateCars(100);
  randomCars.forEach(API.createCar);
};
