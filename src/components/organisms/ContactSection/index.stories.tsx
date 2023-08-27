import { Meta, StoryObj } from '@storybook/react';
import { ABOUT_MOCK } from '@/tests/mocks/createAboutMock';
import { ContactSection } from './';

export const CONTACT_SECTION_ID = 'contact';
export const CONTACT_SECTION_TITLE = 'Contact';

export default {
	component: ContactSection,
	args: {
		sectionId: CONTACT_SECTION_ID,
		sectionTitle: CONTACT_SECTION_TITLE,
		email: ABOUT_MOCK.email,
	},
	excludeStories: [CONTACT_SECTION_ID, CONTACT_SECTION_TITLE],
} as Meta<typeof ContactSection>;

type Story = StoryObj<typeof ContactSection>;

export const Default: Story = {};
