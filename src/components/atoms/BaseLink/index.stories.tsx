import { Meta, StoryObj } from '@storybook/react';
import { BaseLink } from './';

export default {
	component: BaseLink,
	args: { href: '/', label: 'baseLink', isExternal: false, children: 'children' },
} as Meta<typeof BaseLink>;

type Story = StoryObj<typeof BaseLink>;

export const Default: Story = {};

export const External: Story = {
	args: {
		isExternal: true,
	},
};

export const WithoutLabel: Story = {
	args: {
		label: undefined,
	},
};
