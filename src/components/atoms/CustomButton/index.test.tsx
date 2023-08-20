import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './index.stories';
import type { ReactElement } from 'react';

const { Default, Disabled } = composeStories(stories);

const setup = (element: ReactElement) => {
	const { container, getByRole } = render(element);
	const button = getByRole('button', { name: 'CustomButton' });

	expect(container).toBeAtoms();
	expect(button).toBeInTheDocument();

	return { button };
};

describe('CustomButton', () => {
	test('Default', () => {
		const { button } = setup(<Default />);
		expect(button).toBeEnabled();
	});
	test('Disabled', () => {
		const { button } = setup(<Disabled />);
		expect(button).toBeDisabled();
	});
});
