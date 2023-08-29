import { Meta, StoryObj } from '@storybook/react';
import {
	EXPERIENCE_SKILLS_NUMEROUS_LENGTH,
	createExperienceSkillsMock,
} from '@/tests/mocks/createExperienceMock';
import { TagList } from '.';

export default {
	component: TagList,
	args: { items: createExperienceSkillsMock(5) },
} as Meta<typeof TagList>;

type Story = StoryObj<typeof TagList>;

export const Default: Story = {};

export const NumerousItems: Story = {
	args: {
		items: createExperienceSkillsMock(EXPERIENCE_SKILLS_NUMEROUS_LENGTH),
	},
};

export const Empty: Story = {
	args: { items: [] },
};
