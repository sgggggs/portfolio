import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './index.stories';
import type { ReactElement } from 'react';

const { Default } = composeStories(stories);

const setup = (element: ReactElement) => {
	const { container, getByRole } = render(element);
	const heading = getByRole('heading', { name: 'errorTitle' });
	const backToHomeLink = getByRole('link', { name: 'common:back2Home' });

	expect(container).toBeMolecules();
	expect(heading).toBeInTheDocument();
	expect(backToHomeLink).toBeInTheDocument();
};

describe('CustomError', () => {
	test('Default', () => {
		setup(<Default />);
	});
});
