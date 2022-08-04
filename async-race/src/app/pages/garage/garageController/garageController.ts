import { Store } from '../../../store/Store';
import { garageModel } from '../garageModel';
import { garageView } from '../garageView';

export const garageController = () => {
  Store.addSubscriber(garageView);
  garageModel();
};
