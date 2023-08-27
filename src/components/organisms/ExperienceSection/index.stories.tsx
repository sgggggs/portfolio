import { Meta, StoryObj } from '@storybook/react';
import { createExperienceItemsMock } from '@/tests/mocks/createExperienceMock';
import { ExperienceSection } from './';

export const EXPERIENCE_SECTION_ID = 'experience';
export const EXPERIENCE_SECTION_TITLE = 'Experience';

export default {
	component: ExperienceSection,
	args: {
		sectionId: EXPERIENCE_SECTION_ID,
		sectionTitle: EXPERIENCE_SECTION_TITLE,
		items: createExperienceItemsMock(5),
	},
} as Meta<typeof ExperienceSection>;

type Story = StoryObj<typeof ExperienceSection>;

export const Default: Story = {};
