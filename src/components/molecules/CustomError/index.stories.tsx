import { Meta, StoryObj } from '@storybook/react';
import { CustomError } from './';

export default {
	component: CustomError,
	args: { title: 'errorTitle', description: 'errorDescription' },
} as Meta<typeof CustomError>;

type Story = StoryObj<typeof CustomError>;

export const Default: Story = {};
