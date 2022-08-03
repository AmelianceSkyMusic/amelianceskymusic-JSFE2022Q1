import { doFetch } from '../doFetch';

export const getCarsCount = async () => {
  const url = 'garage';

  const paramsString = '?_id=0&_limit=0';
  const request = `${url}${paramsString}`;

  const responseData = await doFetch(request);

  return responseData.count;
};
