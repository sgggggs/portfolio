import { Meta, StoryObj } from '@storybook/react';
import { createExperienceItemsMock } from '@/tests/mocks/createExperienceMock';
import { ExperienceSection } from './';

export default {
	component: ExperienceSection,
	args: {
		sectionId: 'experience',
		sectionTitle: 'Experience',
		items: createExperienceItemsMock(),
	},
} as Meta<typeof ExperienceSection>;

type Story = StoryObj<typeof ExperienceSection>;

export const Default: Story = {};
