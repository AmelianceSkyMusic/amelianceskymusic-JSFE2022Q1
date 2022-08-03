import { getCars } from '../../API/getCars';
import { STORE } from '../../data/store';

export const garageModel = () => {
  const run = async () => {
    const cars = await getCars(1);
    STORE.updateSettings('cars', cars);
  };
  run();
};
