import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './index.stories';
import type { ReactElement } from 'react';

const { Default } = composeStories(stories);

const setup = (element: ReactElement) => {
	const { container } = render(element);
	expect(container).toBeTemplates();
};

describe('BasicLayout', () => {
	test('Default', () => {
		setup(<Default />);
	});
});
