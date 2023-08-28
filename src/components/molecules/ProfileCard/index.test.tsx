import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { ABOUT_MOCK } from '@/tests/mocks/createAboutMock';
import * as stories from './index.stories';
import type { ReactElement } from 'react';

const { Default } = composeStories(stories);

const setup = (element: ReactElement) => {
	const { container, getByRole } = render(element);
	const heading = getByRole('heading', { name: ABOUT_MOCK.displayName });
	const img = getByRole('img', { name: '' });

	expect(container).toBeMolecules();
	expect(heading).toBeInTheDocument();
	expect(img).toBeInTheDocument();
};

describe('ProfileCard', () => {
	test('Default', () => {
		setup(<Default />);
	});
});
