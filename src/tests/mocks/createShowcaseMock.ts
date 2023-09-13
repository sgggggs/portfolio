import { createI18nSchemaMock } from './createI18nSchemaMock';
import type { Showcase, MicroCMSListShowcase } from '@/api/types';

export const SHOWCASE_ITEMS_DEFAULT_LENGTH = 5;
export const SHOWCASE_ITEMS_NUMEROUS_LENGTH = 10;

export const SHOWCASE_MOCK: Showcase = {
	id: 'showcaseId',
	title: 'ShowcaseTitle',
	label: 'ShowcaseLabel',
	thumbnailUrl: '/favicons/favicon-32x32.png',
	contentUrl: '/',
};

export const createShowcaseItemsMock = (
	length: number = SHOWCASE_ITEMS_DEFAULT_LENGTH,
): Showcase[] => {
	return Array.from({ length }, (_, i) => {
		return {
			id: `${SHOWCASE_MOCK.id}${i}`,
			title: `${SHOWCASE_MOCK.title}${i}`,
			label: `${SHOWCASE_MOCK.label}${i}`,
			contentUrl: SHOWCASE_MOCK.contentUrl,
			thumbnailUrl: SHOWCASE_MOCK.thumbnailUrl,
		};
	});
};

export const createMicroCMSShowcaseListMock = (
	length: number = SHOWCASE_ITEMS_DEFAULT_LENGTH,
): MicroCMSListShowcase => {
	const contents = Array.from({ length }, (_, i) => {
		return {
			id: `${SHOWCASE_MOCK.id}${i}`,
			title: createI18nSchemaMock(`${SHOWCASE_MOCK.title}${i}`),
			label: createI18nSchemaMock(`${SHOWCASE_MOCK.label}${i}`),
			contentUrl: SHOWCASE_MOCK.contentUrl,
			thumbnail: {
				width: 40,
				height: 40,
				url: SHOWCASE_MOCK.thumbnailUrl,
			},
		};
	});
	return { contents, totalCount: length, limit: 10, offset: 0 };
};
