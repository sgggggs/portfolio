import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { EXPERIENCE_MOCK } from '@/tests/mocks/createExperienceMock';
import * as stories from './index.stories';
import type { ReactElement } from 'react';

const { Default } = composeStories(stories);

const setup = (element: ReactElement) => {
	const { container, getByRole } = render(element);
	const section = getByRole('region', { name: EXPERIENCE_MOCK.title });
	const heading = getByRole('heading', { name: EXPERIENCE_MOCK.title });

	expect(container).toBeOrganisms();
	expect(section).toBeInTheDocument();
	expect(heading).toBeInTheDocument();
};

describe('ExperienceListItem', () => {
	test('Default', () => {
		setup(<Default />);
	});
});
