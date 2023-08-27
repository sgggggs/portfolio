import { Meta, StoryObj } from '@storybook/react';
import { ABOUT_MOCK } from '@/tests/mocks/createAboutMock';
import { AboutSection } from '.';

export const ABOUT_SECTION_ID = 'about';
export const ABOUT_SECTION_TITLE = 'About';

export default {
	component: AboutSection,
	args: {
		sectionId: ABOUT_SECTION_ID,
		sectionTitle: ABOUT_SECTION_TITLE,
		description: ABOUT_MOCK.description,
	},
} as Meta<typeof AboutSection>;

type Story = StoryObj<typeof AboutSection>;

export const Default: Story = {};
