import { createI18nSchemaMock } from './createI18nSchemaMock';
import type { Experience, MicroCMSListExperience } from '@/api/types';

export const EXPERIENCE_ITEMS_DEFAULT_LENGTH = 5;
export const EXPERIENCE_ITEMS_NUMEROUS_LENGTH = 10;
export const EXPERIENCE_SKILLS_NUMEROUS_LENGTH = 30;

export const createExperienceSkillsMock = (length: number): Experience['skills'] => {
	return Array.from({ length }, (_, i) => `displayName${i}`);
};

export const EXPERIENCE_MOCK: Experience = {
	id: 'experienceId',
	title: 'ExperienceTitle',
	body: 'ExperienceBody',
	startDate: '2022-12-31T08:00:00.000Z',
	endDate: '2022-12-31T08:00:00.000Z',
	isCurrent: false,
	skills: createExperienceSkillsMock(3),
};

export const createExperienceItemsMock = (
	length: number = EXPERIENCE_ITEMS_DEFAULT_LENGTH,
): Experience[] => {
	return Array.from({ length }, (_, i) => {
		return {
			id: `${EXPERIENCE_MOCK.id}${i}`,
			title: `${EXPERIENCE_MOCK.title}${i}`,
			body: `${EXPERIENCE_MOCK.body}${i}`,
			startDate: EXPERIENCE_MOCK.startDate,
			endDate: EXPERIENCE_MOCK.endDate,
			isCurrent: false,
			skills: EXPERIENCE_MOCK.skills,
		};
	});
};

export const createMicroCMSExperienceListMock = (
	length: number = EXPERIENCE_ITEMS_DEFAULT_LENGTH,
): MicroCMSListExperience => {
	const contents = Array.from({ length }, (_, i) => {
		return {
			id: `${EXPERIENCE_MOCK.id}${i}`,
			title: createI18nSchemaMock(`${EXPERIENCE_MOCK.title}${i}`),
			body: createI18nSchemaMock(`${EXPERIENCE_MOCK.body}${i}`),
			startDate: EXPERIENCE_MOCK.startDate,
			endDate: EXPERIENCE_MOCK.endDate,
			isCurrent: false,
			skills: EXPERIENCE_MOCK.skills,
		};
	});
	return { contents, totalCount: length, limit: 10, offset: 0 };
};
