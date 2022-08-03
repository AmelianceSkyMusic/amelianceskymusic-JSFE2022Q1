import { doFetch } from '../doFetch';

export const getCar = async (id: number) => {
  const url = 'garage';

  const paramsString = id > 0 ? `/${id}` : '';
  const request = `${url}${paramsString}`;

  const responseData = await doFetch(request);

  return responseData.data;
};
