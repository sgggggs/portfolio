import { Meta, StoryObj } from '@storybook/react';
import { SHOWCASE_MOCK } from '@/tests/mocks/createShowcaseMock';
import { ShowcaseListItem } from './';

export default {
	component: ShowcaseListItem,
	args: {
		id: SHOWCASE_MOCK.id,
		title: SHOWCASE_MOCK.title,
		label: SHOWCASE_MOCK.label,
		thumbnailUrl: SHOWCASE_MOCK.thumbnailUrl,
		contentUrl: SHOWCASE_MOCK.contentUrl,
	},
} as Meta<typeof ShowcaseListItem>;

type Story = StoryObj<typeof ShowcaseListItem>;

export const Default: Story = {};

export const WithLongText: Story = {
	args: {
		...Default.args,
		title: `${SHOWCASE_MOCK.title} `.repeat(16),
		label: `${SHOWCASE_MOCK.label} `.repeat(16),
	},
};
