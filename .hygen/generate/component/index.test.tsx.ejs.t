---
to: <%= abs_path %>/index.test.tsx
---
import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from './index.stories';

const { Default } = composeStories(stories);

const setup = () => {
	const target = screen.getByRole('');
  expect(target).toBe<%= category %>();
  expect(target).toBeInTheDocument();
	return { target };
};

describe('<%= component_name %>', () => {
	test('Default', () => {
		render(<Default />);
		const { target } = setup();
	});
});