export const doFetch = async (request: string, method = 'GET', headers = {}, body = {}) => {
  const serverUrl = 'http://localhost:3000/';

  const fetchParams: { [key: string]: string | number | { [key: string]: string | number } } = {};
  if (method) fetchParams.method = method;
  if (Object.keys(headers).length > 0) fetchParams.headers = headers;
  if (Object.keys(body).length > 0) fetchParams.body = JSON.stringify(body);

  const response = await fetch(serverUrl + request, fetchParams);

  // let status: number;
  // switch (response.status) {
  //   case 200: status = 200; break;
  //   case 404: status = 404; break;
  //   case 500: status = 500; break;
  //   default: status = -1; break;
  // }

  const data = await response.json();

  const count = response.headers.get('X-Total-Count');

  return { data, count };
};
