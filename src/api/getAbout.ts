import { API_QUERY_FIELDS_ABOUT } from './constants';
import { client } from './utils';
import type { About } from './types';
import type { Locale } from '@/utils/types';

export const getAbout = async (locale: Locale): Promise<About> => {
	const { biography, description, profileImage, ...rest } = await client.v1.about.$get({
		query: {
			fields: API_QUERY_FIELDS_ABOUT,
		},
	});

	const data: About = {
		...rest,
		description: description[locale],
		biography: biography[locale],
		profileImageUrl: profileImage.url,
	};

	return data;
};
