import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from './index.stories';

const { Default, Disabled } = composeStories(stories);

const setup = () => {
	const button = screen.getByRole('button');
	return { button };
};

describe('CustomButton', () => {
	test('Default', () => {
		render(<Default />);
		const { button } = setup();
		expect(button).toBeInTheDocument();
		expect(button).toBeEnabled();
	});
	test('Disabled', () => {
		render(<Disabled />);
		const { button } = setup();
		expect(button).toBeInTheDocument();
		expect(button).toBeDisabled();
	});
});
