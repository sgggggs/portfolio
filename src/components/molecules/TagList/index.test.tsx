import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { EXPERIENCE_SKILLS_NUMEROUS_LENGTH } from '@/tests/mocks/createExperienceMock';
import * as stories from './index.stories';
import type { ReactElement } from 'react';

const { Default, NumerousItems, Empty } = composeStories(stories);

const setup = (element: ReactElement) => {
	const { container, queryByRole, queryAllByRole } = render(element);
	const list = queryByRole('list');
	const items = queryAllByRole('listitem');
	return { container, list, items };
};

describe('TagList', () => {
	test('Default', () => {
		const { container, list, items } = setup(<Default />);
		expect(container).toBeMolecules();
		expect(list).toBeInTheDocument();
		expect(items[0]).toBeInTheDocument();
	});
	test('NumerousItems', () => {
		const { container, list, items } = setup(<NumerousItems />);
		expect(container).toBeMolecules();
		expect(list).toBeInTheDocument();
		expect(items).toHaveLength(EXPERIENCE_SKILLS_NUMEROUS_LENGTH);
	});
	test('Empty', () => {
		const { list, items } = setup(<Empty />);
		expect(list).not.toBeInTheDocument();
		expect(items[0]).toBeUndefined();
	});
});
