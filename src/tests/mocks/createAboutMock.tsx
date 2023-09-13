import { GithubIcon } from '@/components/icons';
import type { About } from '@/api/types';
import type { SnsItem } from '@/components/molecules/SnsList';

const ABOUT_DESCRIPTION_MOCK = `${'body '.repeat(30)}
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
	profileImageUrl: '/favicons/favicon-32x32.png',
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
