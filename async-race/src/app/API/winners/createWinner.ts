import { doFetch } from '../doFetch';

export const createWinner = async (id: number, wins: number, time: number) => {
  const url = 'winners';

  const method = 'POST';
  const body = { id, wins, time };
  const headers = { 'Content-Type': 'application/json' };

  await doFetch(url, method, headers, body);
};
