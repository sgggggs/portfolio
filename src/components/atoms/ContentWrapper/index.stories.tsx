import { Meta, StoryObj } from '@storybook/react';
import { ContentWrapper } from './';

export default {
	component: ContentWrapper,
	args: { columnType: 'single', children: 'children' },
} as Meta<typeof ContentWrapper>;

type Story = StoryObj<typeof ContentWrapper>;

export const Default: Story = {};

export const HybridColumn: Story = {
	args: { columnType: 'hybrid' },
};
