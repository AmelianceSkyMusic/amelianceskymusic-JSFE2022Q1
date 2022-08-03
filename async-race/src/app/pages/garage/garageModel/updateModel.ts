import { getCars } from '../../../API/cars/getCars';
import { getCarsCount } from '../../../API/cars/getCarsCount';
import { Store } from '../../../store/Store';

export const updateModel = async () => {
  const pageNumber = +Store.getValue('pageNumber');
  const carsLimitPerPage = +Store.getValue('carsLimitPerPage');

  const cars = await getCars(pageNumber, carsLimitPerPage);
  const carsCount = await getCarsCount();

  Store.setValue('pagesCount', Math.ceil(Number(carsCount) / carsLimitPerPage));

  Store.updateSettings('cars', cars);
};
