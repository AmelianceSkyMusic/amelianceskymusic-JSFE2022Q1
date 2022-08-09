import API from '../../../API';
import { WinStore } from '../../../store/WinStore';

export const getWinnersPrevCarPage = async () => {
  const winnersLimitPerPage = +WinStore.getValue('winnersLimitPerPage');
  const winnersSort = WinStore.getValue('winnersSort') as string;
  const winnersSortOrder = WinStore.getValue('winnersSortOrder') as string;

  let winnersPageNumber = +WinStore.getValue('winnersPageNumber');
  winnersPageNumber -= 1;
  if (winnersPageNumber < 1) winnersPageNumber = 1;
  WinStore.setValue('winnersPageNumber', winnersPageNumber);

  const winners = await API.getWinners(
    winnersPageNumber,
    winnersLimitPerPage,
    winnersSort,
    winnersSortOrder,
  );

  WinStore.updateSettings({ winners });
};
