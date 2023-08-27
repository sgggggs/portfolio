import { Meta, StoryObj } from '@storybook/react';
import { EXPERIENCE_MOCK } from '@/tests/mocks/createExperienceMock';
import { ExperienceListItem } from '.';

export default {
	component: ExperienceListItem,
	args: {
		id: EXPERIENCE_MOCK.id,
		title: EXPERIENCE_MOCK.title,
		body: EXPERIENCE_MOCK.body,
		startDate: EXPERIENCE_MOCK.startDate,
		endDate: EXPERIENCE_MOCK.endDate,
		skills: EXPERIENCE_MOCK.skills,
	},
} as Meta<typeof ExperienceListItem>;

type Story = StoryObj<typeof ExperienceListItem>;

export const Default: Story = {};
