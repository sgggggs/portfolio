import { Meta, StoryObj } from '@storybook/react';
import { createShowcaseItemsMock } from '@/tests/mocks/createShowcaseMock';
import { ShowcaseSection } from '.';

export default {
	component: ShowcaseSection,
	args: {
		sectionId: 'showcase',
		sectionTitle: 'Showcase',
		items: createShowcaseItemsMock(),
	},
} as Meta<typeof ShowcaseSection>;

type Story = StoryObj<typeof ShowcaseSection>;

export const Default: Story = {};
