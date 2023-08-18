import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from './index.stories';

const { Default, Disabled } = composeStories(stories);

const setup = () => {
	const button = screen.getByRole('button');
	expect(button).toBeAtoms();
	expect(button).toBeInTheDocument();
	return { button };
};

describe('CustomButton', () => {
	test('Default', () => {
		render(<Default />);
		const { button } = setup();
		expect(button).toBeEnabled();
	});
	test('Disabled', () => {
		render(<Disabled />);
		const { button } = setup();
		expect(button).toBeDisabled();
	});
});
