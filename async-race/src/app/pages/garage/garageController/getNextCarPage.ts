import { getCars } from '../../../API/cars/getCars';
import { Store } from '../../../store/Store';

export const getNextCarPage = async () => {
  const carsLimitPerPage = +Store.getValue('carsLimitPerPage');
  const pagesCount = +Store.getValue('pagesCount');

  let pageNumber = +Store.getValue('pageNumber');
  pageNumber += 1;
  if (pageNumber > pagesCount) pageNumber = pagesCount;
  Store.setValue('pageNumber', pageNumber);

  const cars = await getCars(pageNumber, carsLimitPerPage);

  Store.updateSettings('cars', cars);
};
