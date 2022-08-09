import API from '../../../API';
import { WinStore } from '../../../store/WinStore';

export const updateWinnersModel = async () => {
  const winnersPageNumber = +WinStore.getValue('winnersPageNumber');
  const winnersLimitPerPage = +WinStore.getValue('winnersLimitPerPage');
  const winnersSort = WinStore.getValue('winnersSort') as string;
  const winnersSortOrder = WinStore.getValue('winnersSortOrder') as string;

  const winners = await API.getWinners(
    winnersPageNumber,
    winnersLimitPerPage,
    winnersSort,
    winnersSortOrder,
  );

  const winnersCount = Number(await API.getWinnersCount());

  WinStore.setValue('pagesWinnersCount', Math.ceil(Number(winnersCount) / winnersLimitPerPage));

  WinStore.updateSettings({
    winners,
    winnersCount,
  });
};
