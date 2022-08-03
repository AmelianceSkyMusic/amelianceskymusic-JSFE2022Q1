import { doFetch } from '../doFetch';

export const switchCarSEngineToDriveMode = async (id: number) => {
  const url = 'engine';

  const paramsString = `?id=${id}&status=drive`;
  const request = `${url}${paramsString}`;

  const method = 'PATCH';

  const result = await doFetch(request, method);

  return result.data;
};
