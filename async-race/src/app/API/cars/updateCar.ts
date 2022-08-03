import { doFetch } from '../doFetch';

export const updateCar = async (id: number, name: string, color: string) => {
  const url = 'garage';

  const paramsString = id > 0 ? `/${id}` : '';
  const request = `${url}${paramsString}`;

  const method = 'PUT';
  const body = { name, color };
  const headers = { 'Content-Type': 'application/json' };

  await doFetch(request, method, headers, body);
};
