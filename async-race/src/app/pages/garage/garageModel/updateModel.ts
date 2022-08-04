import API from '../../../API';
import { Store } from '../../../store/Store';

export const updateModel = async () => {
  const pageNumber = +Store.getValue('pageNumber');
  const carsLimitPerPage = +Store.getValue('carsLimitPerPage');

  const cars = await API.getCars(pageNumber, carsLimitPerPage);
  const carsCount = Number(await API.getCarsCount());

  Store.setValue('pagesCount', Math.ceil(Number(carsCount) / carsLimitPerPage));

  Store.updateSettings({
    cars,
    carsCount,
  });
};
