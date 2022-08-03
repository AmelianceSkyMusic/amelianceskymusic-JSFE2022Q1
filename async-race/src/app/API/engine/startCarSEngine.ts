import { doFetch } from '../doFetch';

export const startCarSEngine = async (id: number) => {
  const url = 'engine';

  const paramsString = `?id=${id}&status=started`;
  const request = `${url}${paramsString}`;

  const method = 'PATCH';

  const result = await doFetch(request, method);

  return result.data;
};
