import { Meta, StoryObj } from '@storybook/react';
import { createSnsItemsMock, SNS_ITEMS_NUMEROUS_LENGTH } from '@/tests/mocks/createAboutMock';
import { SnsList } from '.';

export default {
	component: SnsList,
	args: { items: createSnsItemsMock(5) },
} as Meta<typeof SnsList>;

type Story = StoryObj<typeof SnsList>;

export const Default: Story = {};

export const NumerousItems: Story = {
	args: {
		items: createSnsItemsMock(SNS_ITEMS_NUMEROUS_LENGTH),
	},
};

export const Empty: Story = {
	args: { items: [] },
};
