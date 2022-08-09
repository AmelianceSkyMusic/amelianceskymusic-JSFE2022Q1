import API from '../../../API';
import { Store } from '../../../store/Store';
import { WinStore } from '../../../store/WinStore';

export const updateWinnersModel = async () => {
  const winnersPageNumber = +WinStore.getValue('winnersPageNumber');
  const winnersLimitPerPage = +WinStore.getValue('winnersLimitPerPage');

  const winners = await API.getWinners(winnersPageNumber, winnersLimitPerPage);
  const winnersCount = Number(await API.getWinnersCount());

  WinStore.setValue('pagesWinnersCount', Math.ceil(Number(winnersCount) / winnersLimitPerPage));

  WinStore.updateSettings({
    winners,
    winnersCount,
  });
};
