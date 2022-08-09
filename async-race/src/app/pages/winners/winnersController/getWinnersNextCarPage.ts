import API from '../../../API';
import { WinStore } from '../../../store/WinStore';

export const getWinnersNextCarPage = async () => {
  const winnersLimitPerPage = +WinStore.getValue('winnersLimitPerPage');
  const winnersCount = +WinStore.getValue('winnersCount');
  const winnersSort = WinStore.getValue('winnersSort') as string;
  const winnersSortOrder = WinStore.getValue('winnersSortOrder') as string;

  let winnersPageNumber = +WinStore.getValue('winnersPageNumber');
  winnersPageNumber += 1;
  if (winnersPageNumber > winnersCount) winnersPageNumber = winnersCount;
  WinStore.setValue('winnersPageNumber', winnersPageNumber);

  const winners = await API.getWinners(
    winnersPageNumber,
    winnersLimitPerPage,
    winnersSort,
    winnersSortOrder,
  );

  WinStore.updateSettings({ winners });
};
