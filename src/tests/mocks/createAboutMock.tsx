import { GithubIcon } from '@/components/icons/GithubIcon';
import { createI18nSchemaMock } from './createI18nSchemaMock';
import type { About, MicroCMSAbout } from '@/api/types';
import type { SnsItem } from '@/components/molecules/SnsList';

const ABOUT_DESCRIPTION_MOCK = `${'body'.repeat(30)}
single line break

${'double line break'.repeat(30)}`;

export const ABOUT_MOCK: About = {
	displayName: 'AboutDisplayName',
	description: ABOUT_DESCRIPTION_MOCK,
	profession: 'AboutProfession',
	biography: 'AboutBiography',
	email: 'AboutEmail',
	linkedInUrl: 'AboutLinkedInUrl',
	githubUrl: 'AboutGithubUrl',
	profileImageUrl: 'https://doodleipsum.com/40x40/',
};

export const MICRO_CMS_ABOUT_MOCK: MicroCMSAbout = {
	displayName: ABOUT_MOCK.displayName,
	description: createI18nSchemaMock(ABOUT_DESCRIPTION_MOCK),
	profession: ABOUT_MOCK.profession,
	biography: createI18nSchemaMock(ABOUT_MOCK.biography),
	email: ABOUT_MOCK.email,
	linkedInUrl: ABOUT_MOCK.linkedInUrl,
	githubUrl: ABOUT_MOCK.githubUrl,
	profileImage: {
		width: 40,
		height: 40,
		url: ABOUT_MOCK.profileImageUrl,
	},
};

export const SNS_ITEMS_NUMEROUS_LENGTH = 10;

export const createSnsItemsMock = (length: number): SnsItem[] => {
	return Array.from({ length }, (_, i) => {
		return {
			label: `id${i}`,
			icon: <GithubIcon size={36} />,
			href: `${ABOUT_MOCK.githubUrl}${i}`,
		};
	});
};
