import { renderWinnerAlert } from '../winnerAlert/renderWinnerAlert';

interface IWinnerCarParam {
  name: string
  color: string
  id: number
  velocity: number
  distance: number
}

export const setWinner = (winnerObj: IWinnerCarParam) => {
  const round10 = (num: number) => Math.ceil(num * 100) / 100;
  const msInSec = 1000;
  const time = round10(winnerObj.distance / winnerObj.velocity / msInSec);
  renderWinnerAlert(winnerObj.name, time, winnerObj.id);
};
