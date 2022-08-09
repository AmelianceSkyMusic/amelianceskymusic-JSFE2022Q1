import API from '../../../../API';
import { Store } from '../../../../store/Store';
import { WinStore } from '../../../../store/WinStore';
import { updateWinnersModel } from '../../../winners/winnersModel/updateWinnersModel';
import { renderWinnerAlert } from '../winnerAlert/renderWinnerAlert';

interface IWinnerCarParam {
  name: string
  color: string
  id: number
  velocity: number
  distance: number
}

const addWinnerToList = async (id: number, time: number) => {
  const winnerFromTable = await API.getWinner(id);
  if (Object.keys(winnerFromTable).length > 0) {
    const newTime = time < winnerFromTable.time ? time : winnerFromTable.time;
    const newWins = winnerFromTable.wins + 1;
    await API.updateWinner(id, newWins, newTime);
    WinStore.updateSettings({});
  } else {
    await API.createWinner(id, 1, time);
  }
};

export const setWinner = async (winnerObj: IWinnerCarParam) => {
  const round10 = (num: number) => Math.ceil(num * 100) / 100;
  const msInSec = 1000;
  const time = round10(winnerObj.distance / winnerObj.velocity / msInSec);
  renderWinnerAlert(winnerObj.name, time, winnerObj.id);
  await addWinnerToList(winnerObj.id, time);
  updateWinnersModel();
};
