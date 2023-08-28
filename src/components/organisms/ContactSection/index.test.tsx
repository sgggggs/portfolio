import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { ABOUT_MOCK } from '@/tests/mocks/createAboutMock';
import * as stories from './index.stories';
import type { ReactElement } from 'react';

const { Default } = composeStories(stories);

const setup = (element: ReactElement) => {
	const { container, getByRole } = render(element);
	const section = getByRole('region', { name: 'Contact' });
	const link = getByRole('link', { name: ABOUT_MOCK.email });

	expect(container).toBeOrganisms();
	expect(section).toBeInTheDocument();
	expect(link).toBeInTheDocument();
};

describe('ContactSection', () => {
	test('Default', () => {
		setup(<Default />);
	});
});
