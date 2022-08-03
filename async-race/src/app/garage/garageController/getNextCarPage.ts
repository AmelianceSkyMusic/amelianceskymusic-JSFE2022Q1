import { getCars } from '../../API/getCars';
import { STORE } from '../../data/store';

export const getNextCarPage = async () => {
  const carsLimitPerPage = +STORE.getValue('carsLimitPerPage');
  const pagesCount = +STORE.getValue('pagesCount');

  let pageNumber = +STORE.getValue('pageNumber');
  pageNumber += 1;
  if (pageNumber > pagesCount) pageNumber = pagesCount;
  STORE.setValue('pageNumber', pageNumber);

  const cars = await getCars(pageNumber, carsLimitPerPage);

  STORE.updateSettings('cars', cars);
};
