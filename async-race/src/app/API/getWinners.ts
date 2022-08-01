import { doFetch } from './doFetch';

export const getWinners = async (
  pageNumber: number,
  winnersLimitPerPage?: number,
  sort?: string,
  order?: string,
) => {
  const url = 'winners';
  const queryParams = [];

  if (pageNumber > 0) queryParams.push(`_page=${pageNumber}`);
  if (winnersLimitPerPage && winnersLimitPerPage > 0) {
    queryParams.push(`_limit=${winnersLimitPerPage}`);
  }
  if (sort) queryParams.push(`_sort=${sort}`);
  if (order) queryParams.push(`_order=${order}`);

  const paramsString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
  const request = `${url}${paramsString}`;

  const responseData = await doFetch(request);

  return responseData.data;
};
