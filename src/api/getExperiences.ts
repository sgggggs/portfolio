import { API_QUERY_FIELDS_EXPERIENCE } from './constants';
import { client } from './utils';
import type { Experience } from './types';
import type { Locale } from '@/utils/types';

export const getExperiences = async (locale: Locale): Promise<Experience[]> => {
	const { contents } = await client.v1.experiences.$get({
		query: {
			fields: API_QUERY_FIELDS_EXPERIENCE,
		},
	});

	const data: Experience[] = contents.map(({ title, body, ...rest }) => {
		return { title: title[locale], body: body[locale], ...rest };
	});

	return data;
};
