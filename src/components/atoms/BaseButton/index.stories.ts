import { Meta, StoryObj } from '@storybook/react';
import { BaseButton } from './';

export default {
	component: BaseButton,
	args: { type: 'button', children: 'BaseButton' },
} as Meta<typeof BaseButton>;

type Story = StoryObj<typeof BaseButton>;

export const Default: Story = {};

export const Disabled: Story = {
	args: { disabled: true },
};
