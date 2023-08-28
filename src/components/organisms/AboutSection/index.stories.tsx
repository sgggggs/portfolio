import { Meta, StoryObj } from '@storybook/react';
import { ABOUT_MOCK } from '@/tests/mocks/createAboutMock';
import { AboutSection } from '.';

export default {
	component: AboutSection,
	args: {
		sectionId: 'about',
		sectionTitle: 'About',
		description: ABOUT_MOCK.description,
	},
} as Meta<typeof AboutSection>;

type Story = StoryObj<typeof AboutSection>;

export const Default: Story = {};
