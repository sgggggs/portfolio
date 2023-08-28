import { Meta, StoryObj } from '@storybook/react';
import { ABOUT_MOCK } from '@/tests/mocks/createAboutMock';
import { ContactSection } from './';

export default {
	component: ContactSection,
	args: {
		sectionId: 'contact',
		sectionTitle: 'Contact',
		email: ABOUT_MOCK.email,
	},
} as Meta<typeof ContactSection>;

type Story = StoryObj<typeof ContactSection>;

export const Default: Story = {};
