import { getCars } from '../../API/getCars';
import { getCarsCount } from '../../API/getCarsCount';
import { STORE } from '../../data/store';

export const initModel = async () => {
  const pageNumber = +STORE.getValue('pageNumber');
  const carsLimitPerPage = +STORE.getValue('carsLimitPerPage');
  const cars = await getCars(pageNumber, carsLimitPerPage);
  const carsCount = await getCarsCount();
  STORE.setValue('pagesCount', Math.ceil(Number(carsCount) / carsLimitPerPage));
  STORE.updateSettings('cars', cars);
};
