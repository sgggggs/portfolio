import { Meta, StoryObj } from '@storybook/react';
import { ContentWrapper } from './';

export default {
	component: ContentWrapper,
	args: { children: 'children' },
} as Meta<typeof ContentWrapper>;

type Story = StoryObj<typeof ContentWrapper>;

export const Default: Story = {};
