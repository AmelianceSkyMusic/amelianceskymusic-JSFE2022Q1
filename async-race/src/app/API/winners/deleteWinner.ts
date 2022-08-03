import { doFetch } from '../doFetch';

export const deleteWinner = async (id: number) => {
  const url = 'winners';

  const method = 'DELETE';

  const paramsString = id > 0 ? `/${id}` : '';
  const request = `${url}${paramsString}`;

  await doFetch(request, method);
};
