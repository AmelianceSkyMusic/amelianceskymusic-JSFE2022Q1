import { STORE } from '../../data/store';
import { garageModel } from '../garageModel';
import { garageView } from '../garageView';

export const garageController = () => {
  STORE.addSubscriber(garageView);
  garageModel();
};
