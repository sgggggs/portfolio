import type { Locales } from '@/utils/types';
import type { MicroCMSImage, MicroCMSListResponse, MicroCMSContentId } from 'microcms-js-sdk';

// MicroCMS
export type I18nSchema = Locales;

type CustomMicroCMSListResponse<T> = Pick<
	MicroCMSListResponse<T>,
	'totalCount' | 'limit' | 'offset'
> & {
	contents: (T & MicroCMSContentId)[];
};

export type MicroCMSAbout = Omit<About, 'description' | 'profileImageUrl' | 'biography'> & {
	description: I18nSchema;
	profileImage: MicroCMSImage;
	biography: I18nSchema;
};

export type MicroCMSListExperience = CustomMicroCMSListResponse<
	Omit<Experience, 'title' | 'body'> & {
		title: I18nSchema;
		body: I18nSchema;
	}
>;

// About
export type About = {
	displayName: string;
	profession: string;
	biography: string;
	description: string;
	email: string;
	linkedInUrl: string;
	githubUrl: string;
	profileImageUrl: string;
};

// Experience
export type Experience = {
	id: string;
	title: string;
	body: string;
	startDate: string;
	endDate: string;
	skills: string[];
};
