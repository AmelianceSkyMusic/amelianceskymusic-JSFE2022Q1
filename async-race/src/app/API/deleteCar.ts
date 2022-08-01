import { doFetch } from './doFetch';

export const deleteCar = async (id: number) => {
  const url = 'garage';

  const method = 'DELETE';

  const paramsString = id > 0 ? `/${id}` : '';
  const request = `${url}${paramsString}`;

  await doFetch(request, method);
};
