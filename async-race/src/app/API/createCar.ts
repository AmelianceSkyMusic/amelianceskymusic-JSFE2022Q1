import { doFetch } from './doFetch';

export const createCar = async ({ name, color }: { name: string; color: string }) => {
  const url = 'garage';

  const method = 'POST';
  const body = { name, color };
  const headers = { 'Content-Type': 'application/json' };

  await doFetch(url, method, headers, body);
};
