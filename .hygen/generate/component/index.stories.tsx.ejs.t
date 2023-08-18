---
to: <%= abs_path %>/index.stories.tsx
---
import { Meta, StoryObj } from '@storybook/react';
import { <%= component_name %> } from './';

export default {
	component: <%= component_name %>,
	args: { },
} as Meta<typeof <%= component_name %>>;

type Story = StoryObj<typeof <%= component_name %>>;

export const Default: Story = {};