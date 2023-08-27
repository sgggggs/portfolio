import { Meta, StoryObj } from '@storybook/react';
import {
	createExperienceItemsMock,
	EXPERIENCE_ITEMS_NUMEROUS_LENGTH,
} from '@/tests/mocks/createExperienceMock';
import { ExperienceList } from '.';

export default {
	component: ExperienceList,
	args: { items: createExperienceItemsMock(5) },
} as Meta<typeof ExperienceList>;

type Story = StoryObj<typeof ExperienceList>;

export const Default: Story = {};

export const NumerousItems: Story = {
	args: {
		items: createExperienceItemsMock(EXPERIENCE_ITEMS_NUMEROUS_LENGTH),
	},
};

export const Empty: Story = {
	args: { items: [] },
};
