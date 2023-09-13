import { API_QUERY_FIELDS_SHOWCASE } from './constants';
import { client } from './utils';
import type { Showcase } from './types';
import type { Locale } from '@/utils/types';

export const getShowcases = async (locale: Locale): Promise<Showcase[]> => {
	const { contents } = await client.v1.showcases.$get({
		query: {
			fields: API_QUERY_FIELDS_SHOWCASE,
		},
	});

	const data: Showcase[] = contents.map(({ title, label, thumbnail, ...rest }) => {
		return { title: title[locale], label: label[locale], thumbnailUrl: thumbnail.url, ...rest };
	});

	return data;
};
