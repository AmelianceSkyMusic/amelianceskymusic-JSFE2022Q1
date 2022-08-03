// import API file with this line: import * as API from '../../API';

import { getCarsCount } from './getCarsCount';
import { getCars } from './getCars';
import { getCar } from './getCar';

import { createCar } from './createCar';
import { updateCar } from './updateCar';
import { deleteCar } from './deleteCar';

import { startCarSEngine } from './startCarSEngine';
import { stopCarSEngine } from './stopCarSEngine';
import { switchCarSEngineToDriveMode } from './switchCarSEngineToDriveMode';

import { getWinners } from './getWinners';
import { getWinner } from './getWinner';

import { createWinner } from './createWinner';
import { updateWinner } from './updateWinner';
import { deleteWinner } from './deleteWinner';

export default {
  getCarsCount,
  getCars,
  getCar,
  createCar,
  updateCar,
  deleteCar,
  startCarSEngine,
  stopCarSEngine,
  switchCarSEngineToDriveMode,
  getWinners,
  getWinner,
  createWinner,
  updateWinner,
  deleteWinner,
};
