import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './index.stories';
import type { ReactElement } from 'react';

const { Default } = composeStories(stories);

const setup = (element: ReactElement) => {
	const { container, getByRole } = render(element);
	const section = getByRole('region', { name: 'Showcase' });

	expect(container).toBeOrganisms();
	expect(section).toBeInTheDocument();
};

describe('ShowcaseSection', () => {
	test('Default', () => {
		setup(<Default />);
	});
});
