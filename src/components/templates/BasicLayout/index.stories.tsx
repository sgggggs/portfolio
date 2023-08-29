import { Meta, StoryObj } from '@storybook/react';
import { BasicLayout } from './';

export default {
	component: BasicLayout,
	args: { children: 'children' },
} as Meta<typeof BasicLayout>;

type Story = StoryObj<typeof BasicLayout>;

export const Default: Story = {};
