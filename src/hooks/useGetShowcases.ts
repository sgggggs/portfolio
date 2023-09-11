import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { LOCALES } from '@/utils/constants';
import { isIncluded } from '@/utils/isIncluded';
import type { MicroCMSListShowcase, Showcase } from '@/api/types';

type UseGetShowcasesArgs = MicroCMSListShowcase;

type UseGetShowcasesReturnType = {
	data: Showcase[] | undefined;
};

export const useGetShowcases = (showcase: UseGetShowcasesArgs): UseGetShowcasesReturnType => {
	const { locale, isReady } = useRouter();
	const [data, setData] = useState<Showcase[] | undefined>();
	const { contents } = showcase;

	useEffect(() => {
		if (!isReady || !isIncluded(LOCALES, locale)) {
			return;
		}

		const data = contents.map(({ title, label, thumbnail, ...rest }) => {
			return { title: title[locale], label: label[locale], thumbnailUrl: thumbnail.url, ...rest };
		});

		setData(data);
	}, [isReady, locale, contents]);

	return { data };
};
