import { appView } from './appView';
import { garageController } from './garage/garageController';

export const app = () => {
  appView();
  garageController();
};
