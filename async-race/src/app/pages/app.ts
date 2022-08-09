import { appView } from './appView';
import { garageController } from './garage/garageController';
import { winnersController } from './winners/winnersController';

export const app = () => {
  appView();
  garageController();
  winnersController();
};
