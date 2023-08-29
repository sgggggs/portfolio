import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { LOCALES } from '@/utils/constants';
import { isIncluded } from '@/utils/isIncluded';
import type { MicroCMSListExperience, Experience } from '@/api/types';

type UseGetExperiencesArgs = MicroCMSListExperience;

type UseGetExperiencesReturnType = {
	data: Experience[] | undefined;
};

export const useGetExperiences = (
	experiences: UseGetExperiencesArgs,
): UseGetExperiencesReturnType => {
	const { locale, isReady } = useRouter();
	const [data, setData] = useState<Experience[] | undefined>();
	const { contents } = experiences;

	useEffect(() => {
		if (!isReady || !isIncluded(LOCALES, locale)) {
			return;
		}

		const data = contents.map(({ title, body, ...rest }) => {
			return { title: title[locale], body: body[locale], ...rest };
		});

		setData(data);
	}, [isReady, locale, contents]);

	return { data };
};
