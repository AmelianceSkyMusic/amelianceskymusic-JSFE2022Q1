import { doFetch } from '../doFetch';

export const getWinner = async (id: number) => {
  const url = 'winners';

  const paramsString = id > 0 ? `/${id}` : '';
  const request = `${url}${paramsString}`;

  const responseData = await doFetch(request);

  return responseData.data;
};
