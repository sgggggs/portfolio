import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './index.stories';
import type { ReactElement } from 'react';

const { Default, External, WithoutLabel } = composeStories(stories);

const setup = (element: ReactElement) => {
	const { container, getByRole } = render(element);
	expect(container).toBeAtoms();
	return { getByRole };
};

describe('BaseLink', () => {
	test('Default', () => {
		const { getByRole } = setup(<Default />);
		const link = getByRole('link', { name: 'baseLink' });
		expect(link).toBeInTheDocument();
	});
	test('External', () => {
		const { getByRole } = setup(<External />);
		const link = getByRole('link', { name: 'baseLink' });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('rel', 'noopener');
		expect(link).toHaveAttribute('target', '_brank');
	});
	test('WithoutLabel', () => {
		const { getByRole } = setup(<WithoutLabel />);
		const link = getByRole('link', { name: 'children' });
		expect(link).toBeInTheDocument();
		expect(link).not.toHaveAttribute('aria-label');
	});
});
