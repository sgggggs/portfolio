import { Meta, StoryObj } from '@storybook/react';
import { EXPERIENCE_MOCK } from '@/tests/mocks/createExperienceMock';
import { ExperienceListItem } from '.';

export default {
	component: ExperienceListItem,
	args: EXPERIENCE_MOCK,
} as Meta<typeof ExperienceListItem>;

type Story = StoryObj<typeof ExperienceListItem>;

export const Default: Story = {};

export const WithIsCurrent: Story = {
	args: {
		isCurrent: true,
	},
};

export const WithoutSkills: Story = {
	args: {
		skills: [],
	},
};
