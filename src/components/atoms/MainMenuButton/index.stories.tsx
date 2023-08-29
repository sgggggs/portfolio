import { Meta, StoryObj } from '@storybook/react';
import { MainMenuButton } from './';

export default {
	component: MainMenuButton,
	args: { isOpen: false },
} as Meta<typeof MainMenuButton>;

type Story = StoryObj<typeof MainMenuButton>;

export const Default: Story = {};

export const Open: Story = { args: { isOpen: true } };
