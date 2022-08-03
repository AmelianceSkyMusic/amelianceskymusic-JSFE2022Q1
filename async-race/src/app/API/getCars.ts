import { doFetch } from './doFetch';

export const getCars = async (pageNumber: number, carsLimitPerPage?: number) => {
  const url = 'garage';
  const queryParams = [];

  if (pageNumber > 0) queryParams.push(`_page=${pageNumber}`);
  if (carsLimitPerPage && carsLimitPerPage > 0) {
    queryParams.push(`_limit=${carsLimitPerPage}`);
  }

  const paramsString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
  const request = `${url}${paramsString}`;

  const responseData = await doFetch(request);

  return responseData.data;
};
