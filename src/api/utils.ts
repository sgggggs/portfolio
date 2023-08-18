import aspida from '@aspida/fetch';
import api from './$api';

const fetchConfig: Required<Parameters<typeof aspida>>[1] = {
	baseURL: process.env.MICRO_CMS_SERVICE_BASE_URL,
	headers: {
		'X-MICROCMS-API-KEY': process.env.MICRO_CMS_API_KEY ?? '',
	},
	throwHttpErrors: true,
};

export const client = api(aspida(fetch, fetchConfig));
