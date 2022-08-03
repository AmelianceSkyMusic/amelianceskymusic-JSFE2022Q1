import { doFetch } from '../doFetch';

export const stopCarSEngine = async (id: number) => {
  const url = 'engine';

  const paramsString = `?id=${id}&status=stopped`;
  const request = `${url}${paramsString}`;

  const method = 'PATCH';

  const result = await doFetch(request, method);

  return result.data;
};
