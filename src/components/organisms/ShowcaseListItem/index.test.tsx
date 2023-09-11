import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { SHOWCASE_MOCK } from '@/tests/mocks/createShowcaseMock';
import * as stories from './index.stories';
import type { ReactElement } from 'react';

const { Default } = composeStories(stories);

const setup = (element: ReactElement) => {
	const { container, getByRole } = render(element);
	const section = getByRole('region', { name: SHOWCASE_MOCK.title });
	const heading = getByRole('heading', { name: SHOWCASE_MOCK.title });

	expect(container).toBeOrganisms();
	expect(section).toBeInTheDocument();
	expect(heading).toBeInTheDocument();
};

describe('ShowcaseListItem', () => {
	test('Default', () => {
		setup(<Default />);
	});
});
