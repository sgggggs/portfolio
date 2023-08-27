import { Meta, StoryObj } from '@storybook/react';
import { Tag } from '.';

export default {
	component: Tag,
	args: { displayName: 'displayName' },
} as Meta<typeof Tag>;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {};
