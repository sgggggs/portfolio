import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './index.stories';
import type { ReactElement } from 'react';

const { Default, Open } = composeStories(stories);

const setup = (element: ReactElement, name: string) => {
	const { container, getByRole } = render(element);
	expect(container).toBeAtoms();
	const button = getByRole('button', { name });
	expect(button).toBeInTheDocument();
	expect(button).toBeEnabled();
};

describe('MainMenuButton', () => {
	test('Default', () => {
		setup(<Default />, 'common:menuOpen');
	});

	test('Open', () => {
		setup(<Open />, 'common:menuClose');
	});
});
