import { doFetch } from '../doFetch';

export const updateWinner = async (id: number, wins: string, time: string) => {
  const url = 'winners';

  const paramsString = id > 0 ? `/${id}` : '';
  const request = `${url}${paramsString}`;

  const method = 'PUT';
  const body = { wins, time };
  const headers = { 'Content-Type': 'application/json' };

  await doFetch(request, method, headers, body);
};
