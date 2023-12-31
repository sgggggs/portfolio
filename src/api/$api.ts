import type { AspidaClient } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_b3exqt } from './v1/about';
import type { Methods as Methods_mpyvh9 } from './v1/experiences';
import type { Methods as Methods_1ejiqzu } from './v1/showcases';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/v1/about';
  const PATH1 = '/v1/experiences';
  const PATH2 = '/v1/showcases';
  const GET = 'GET';

  return {
    v1: {
      about: {
        get: (option?: { query?: Methods_b3exqt['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_b3exqt['get']['resBody']>(prefix, PATH0, GET, option).json(),
        $get: (option?: { query?: Methods_b3exqt['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_b3exqt['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_b3exqt['get']['query'] } | undefined) =>
          `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      experiences: {
        get: (option?: { query?: Methods_mpyvh9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_mpyvh9['get']['resBody']>(prefix, PATH1, GET, option).json(),
        $get: (option?: { query?: Methods_mpyvh9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_mpyvh9['get']['resBody']>(prefix, PATH1, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_mpyvh9['get']['query'] } | undefined) =>
          `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      showcases: {
        get: (option?: { query?: Methods_1ejiqzu['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1ejiqzu['get']['resBody']>(prefix, PATH2, GET, option).json(),
        $get: (option?: { query?: Methods_1ejiqzu['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1ejiqzu['get']['resBody']>(prefix, PATH2, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1ejiqzu['get']['query'] } | undefined) =>
          `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
