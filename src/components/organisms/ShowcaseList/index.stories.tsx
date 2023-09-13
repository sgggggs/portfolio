import { Meta, StoryObj } from '@storybook/react';
import {
	createShowcaseItemsMock,
	SHOWCASE_ITEMS_NUMEROUS_LENGTH,
} from '@/tests/mocks/createShowcaseMock';
import { ShowcaseList } from '.';

export default {
	component: ShowcaseList,
	args: { items: createShowcaseItemsMock() },
} as Meta<typeof ShowcaseList>;

type Story = StoryObj<typeof ShowcaseList>;

export const Default: Story = {};

export const NumerousItems: Story = {
	args: {
		items: createShowcaseItemsMock(SHOWCASE_ITEMS_NUMEROUS_LENGTH),
	},
};

export const Empty: Story = {
	args: { items: [] },
};
