import { STORE } from '../../data/store';
import { IStore } from '../../types/interfaces';
import { garageModel } from '../garageModel';
import { garageView } from '../garageView';

export const garageController = () => {
  const log = (store: IStore) => {
    console.log('update--> ', store);
  };
  STORE.addSubscriber(log);
  garageModel();
  garageView();
};
