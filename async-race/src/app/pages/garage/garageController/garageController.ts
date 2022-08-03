import { garageModel } from '../garageModel';
import { garageView } from '../garageView';

export const garageController = () => {
  garageView();
  garageModel();
};
