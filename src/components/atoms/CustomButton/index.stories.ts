import { Meta, StoryObj } from '@storybook/react';
import { CustomButton } from './';

export default {
	component: CustomButton,
	args: { type: 'button', text: 'CustomButton' },
} as Meta<typeof CustomButton>;

type Story = StoryObj<typeof CustomButton>;

export const Default: Story = {};

export const Disabled: Story = {
	args: { disabled: true },
};
