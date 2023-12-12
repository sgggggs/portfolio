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

export type MicroCMSListShowcase = CustomMicroCMSListResponse<
	Omit<Showcase, 'title' | 'label' | 'thumbnailUrl'> & {
		title: I18nSchema;
		label: I18nSchema;
		thumbnail: MicroCMSImage;
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
	isCurrent: boolean;
	skills: string[];
};

// Showcase
export type Showcase = {
	id: string;
	title: string;
	label: string;
	thumbnailUrl: string;
	contentUrl: string;
};
