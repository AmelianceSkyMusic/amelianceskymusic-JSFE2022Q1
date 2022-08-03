import { TCars } from '../types/types';

export const doFetch = async (request: string, method = 'GET', headers = {}, body = {}) => {
  const serverUrl = 'http://localhost:3000/';
  let data: TCars = [];
  let count;

  const fetchParams: { [key: string]: string | number | { [key: string]: string | number } } = {};
  if (method) fetchParams.method = method;
  if (Object.keys(headers).length > 0) fetchParams.headers = headers;
  if (Object.keys(body).length > 0) fetchParams.body = JSON.stringify(body);

  try {
    console.log(serverUrl + request, fetchParams);

    const response = await fetch(serverUrl + request, fetchParams);
    if (response.status === 404) console.log('get 404');
    data = await response.json();

    count = response.headers.get('X-Total-Count');
    console.log('count', count);
  } catch (error) {
    console.log(error);
  }

  return { data, count };
};
