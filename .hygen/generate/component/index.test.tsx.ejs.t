---
to: <%= abs_path %>/index.test.tsx
---
import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from './index.stories';
import type { ReactElement } from 'react';

const { Default } = composeStories(stories);

const setup = (element: ReactElement) => {
	const { container, getByRole } = render(element);
  expect(container).toBe<%= category %>();
	expect(getByRole('')).toBeInTheDocument();
	return { };
};

describe('<%= component_name %>', () => {
	test('Default', () => {
		setup(<Default />);
	});
});