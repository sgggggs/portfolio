import type { AspidaClient } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_mpyvh9 } from './v1/experiences';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/v1/experiences';
  const GET = 'GET';

  return {
    v1: {
      experiences: {
        get: (option?: { query?: Methods_mpyvh9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_mpyvh9['get']['resBody']>(prefix, PATH0, GET, option).json(),
        $get: (option?: { query?: Methods_mpyvh9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_mpyvh9['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_mpyvh9['get']['query'] } | undefined) =>
          `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
