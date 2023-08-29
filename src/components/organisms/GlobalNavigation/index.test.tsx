import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './index.stories';
import type { ReactElement } from 'react';

const { Default } = composeStories(stories);

const setup = (element: ReactElement) => {
	const { container, getByRole } = render(element);
	const nav = getByRole('navigation');

	expect(container).toBeOrganisms();
	expect(nav).toBeInTheDocument();
};

describe('GlobalNavigation', () => {
	test('Default', () => {
		setup(<Default />);
	});
});
