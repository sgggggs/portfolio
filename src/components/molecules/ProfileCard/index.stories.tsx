import { Meta, StoryObj } from '@storybook/react';
import { ABOUT_MOCK } from '@/tests/mocks/createAboutMock';
import { ProfileCard } from '.';

export default {
	component: ProfileCard,
	args: {
		displayName: ABOUT_MOCK.displayName,
		profession: ABOUT_MOCK.profession,
		githubUrl: ABOUT_MOCK.githubUrl,
		linkedInUrl: ABOUT_MOCK.linkedInUrl,
		profileImageUrl: ABOUT_MOCK.profileImageUrl,
	},
} as Meta<typeof ProfileCard>;

type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {};
