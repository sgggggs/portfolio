import type { MicroCMSListResponse } from 'microcms-js-sdk';

type Experience = {
	id: number;
	title: string;
	body: string;
	tags: [];
	date: string;
};

export type MicroCMSListExperience = MicroCMSListResponse<Experience>;
