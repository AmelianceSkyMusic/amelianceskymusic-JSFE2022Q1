import API from '../../API';
import { generateCars } from '../garageModel/generateCars';

export const add100RandomCars = () => {
  const randomCars = generateCars(100);
  randomCars.forEach(API.createCar);
};
