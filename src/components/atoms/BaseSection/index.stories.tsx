import { Meta, StoryObj } from '@storybook/react';
import { BaseSection } from '.';

export default {
	component: BaseSection,
	args: { children: 'children' },
} as Meta<typeof BaseSection>;

type Story = StoryObj<typeof BaseSection>;

export const Default: Story = {};
