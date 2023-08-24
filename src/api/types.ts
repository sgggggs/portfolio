import type { MicroCMSDate, MicroCMSListResponse } from 'microcms-js-sdk';

type About = {
	body: string;
};

export type MicroCMSDataAbout = MicroCMSDate & About;

type Experience = {
	id: number;
	title: string;
	body: string;
	tags: [];
	date: string;
};

export type MicroCMSListExperience = MicroCMSListResponse<Experience>;
