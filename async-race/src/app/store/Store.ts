import { observer } from './observer';

export const Store = observer({
  pageNumber: 1,
  carsLimitPerPage: 7,
});
