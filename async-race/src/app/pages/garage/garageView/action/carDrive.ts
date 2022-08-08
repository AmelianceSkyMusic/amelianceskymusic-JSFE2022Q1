import API from '../../../../API';
import Animations from './Animations';

export const carDrive = async (id: number) => {
  const track$ = document.querySelector('.track') as HTMLDivElement;
  const raceParam = await API.startCarSEngine(id);
  const carWidth = 80;
  const trackWidth = track$.clientWidth - carWidth;
  const distPerMs = raceParam.distance / raceParam.velocity;
  const car$ = document.querySelector(`[data-id="${id}"]`) as HTMLDivElement;
  const carMoving = car$.animate(
    Animations.getCarMoveAnimation(0, trackWidth),
    Animations.getCarTimingAnimation(distPerMs),
  );

  const carBlur = car$.animate(
    Animations.getCarBlurAnimaton(raceParam.velocity),
    Animations.getCarTimingAnimation(distPerMs),
  );

  try {
    await API.switchCarSEngineToDriveMode(id);
  } catch (error) {
    carMoving.pause();
    carBlur.cancel();
    car$.classList.add('show-smoke');
  }
};
