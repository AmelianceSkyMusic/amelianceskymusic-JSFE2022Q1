import { getCarsCount } from './cars/getCarsCount';
import { getCars } from './cars/getCars';
import { getCar } from './cars/getCar';

import { createCar } from './cars/createCar';
import { updateCar } from './cars/updateCar';
import { deleteCar } from './cars/deleteCar';

import { startCarSEngine } from './engine/startCarSEngine';
import { stopCarSEngine } from './engine/stopCarSEngine';
import { switchCarSEngineToDriveMode } from './engine/switchCarSEngineToDriveMode';

import { getWinners } from './winners/getWinners';
import { getWinner } from './winners/getWinner';

import { createWinner } from './winners/createWinner';
import { updateWinner } from './winners/updateWinner';
import { deleteWinner } from './winners/deleteWinner';

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
