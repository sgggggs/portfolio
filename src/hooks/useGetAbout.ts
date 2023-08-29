import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { LOCALES } from '@/utils/constants';
import { isIncluded } from '@/utils/isIncluded';
import type { MicroCMSAbout, About } from '@/api/types';

type UseGetAboutArgs = MicroCMSAbout;

type UseGetAboutReturnType = {
	data: About | undefined;
};

export const useGetAbout = (content: UseGetAboutArgs): UseGetAboutReturnType => {
	const { locale, isReady } = useRouter();
	const [data, setData] = useState<About | undefined>();

	useEffect(() => {
		if (!isReady || !isIncluded(LOCALES, locale)) {
			return;
		}

		const { displayName, profession, email, linkedInUrl, githubUrl } = content;

		const data = {
			displayName,
			profession,
			email,
			linkedInUrl,
			githubUrl,
			description: content.description[locale],
			biography: content.biography[locale],
			profileImageUrl: content.profileImage.url,
		};

		setData(data);
	}, [isReady, locale, content]);

	return { data };
};
