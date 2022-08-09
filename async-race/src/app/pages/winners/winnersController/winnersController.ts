import { WinStore } from '../../../store/WinStore';
import { winnersModel } from '../winnersModel';
import { winnersView } from '../winnersView';

export const winnersController = () => {
  WinStore.addSubscriber(winnersView);
  winnersModel();
};
