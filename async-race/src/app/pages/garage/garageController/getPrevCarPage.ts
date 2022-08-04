import { getCars } from '../../../API/cars/getCars';
import { Store } from '../../../store/Store';

export const getPrevCarPage = async () => {
  const carsLimitPerPage = +Store.getValue('carsLimitPerPage');

  let pageNumber = +Store.getValue('pageNumber');
  pageNumber -= 1;
  if (pageNumber < 1) pageNumber = 1;
  Store.setValue('pageNumber', pageNumber);

  const cars = await getCars(pageNumber, carsLimitPerPage);

  Store.updateSettings({ cars });
};
