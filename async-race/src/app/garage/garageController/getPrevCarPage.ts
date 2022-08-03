import { getCars } from '../../API/getCars';
import { STORE } from '../../data/store';

export const getPrevCarPage = async () => {
  const carsLimitPerPage = +STORE.getValue('carsLimitPerPage');

  let pageNumber = +STORE.getValue('pageNumber');
  pageNumber -= 1;
  if (pageNumber < 1) pageNumber = 1;
  STORE.setValue('pageNumber', pageNumber);

  const cars = await getCars(pageNumber, carsLimitPerPage);

  STORE.updateSettings('cars', cars);
};
