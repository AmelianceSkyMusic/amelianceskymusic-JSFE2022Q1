import API from '../../../../API';
import { ICar } from '../../../../types/interfaces';
import { enableStopAllButton } from '../enableBoxTrackControls/enableStopAllButton';
import { enableWinnersPageButton } from '../enableBoxTrackControls/enableWinnersPageButton';
import Animations from './Animations';
import { setWinner } from './setWinner';

const startRaceAnimaton = (raceParam: { [key: string]: number }, i: number, cars: ICar[]) => {
  const carIds = cars.map((car: ICar) => car.id);
  const track$ = document.querySelector('.track') as HTMLDivElement;
  const carWidth = 80;
  const trackWidth = track$.clientWidth - carWidth;
  const carId = carIds[i];
  const distPerMs = raceParam.distance / raceParam.velocity;
  const car$ = document.querySelector(`[data-id="${carId}"]`) as HTMLDivElement;
  const carMoving = car$.animate(
    Animations.getCarMoveAnimation(0, trackWidth),
    Animations.getCarTimingAnimation(distPerMs),
  );
  const carBlur = car$.animate(
    Animations.getCarBlurAnimaton(raceParam.velocity),
    Animations.getCarTimingAnimation(distPerMs),
  );
  return { car: car$, carMoving, carBlur };
};

export const carDriveAll = async (cars: ICar[]) => {
  const requests = cars.map((car: ICar) => API.startCarSEngine(car.id));
  const raceParams = await Promise.all(requests);
  const idxTimes = raceParams.map((carRaceParam, i) => ({
    name: cars[i].name,
    color: cars[i].color,
    id: cars[i].id,
    velocity: carRaceParam.velocity as number,
    distance: carRaceParam.distance as number,
  }));
  enableWinnersPageButton();

  const carsElemAnimationPack = raceParams.map(
    (raceParam, i) => startRaceAnimaton(raceParam, i, cars),
  );
  let isSetWinner = false;
  cars.forEach(async (car: ICar, i) => {
    try {
      const success = await API.switchCarSEngineToDriveMode(car.id);
      if (!isSetWinner && success) {
        isSetWinner = true;
        setWinner(idxTimes[i]);
        enableStopAllButton();
      }
    } catch (error) {
      carsElemAnimationPack[i].carMoving.pause();
      carsElemAnimationPack[i].carBlur.pause();
      carsElemAnimationPack[i].car.classList.add('show-smoke');
    }
  });
};
