import { doFetch } from '../doFetch';

export const getWinnersCount = async () => {
  const url = 'winners';

  const paramsString = '?_page=0&_limit=0';
  const request = `${url}${paramsString}`;

  const responseData = await doFetch(request);

  return responseData.count;
};
