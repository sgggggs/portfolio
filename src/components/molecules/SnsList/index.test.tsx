import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { SNS_ITEMS_NUMEROUS_LENGTH } from '@/tests/mocks/createAboutMock';
import * as stories from './index.stories';
import type { ReactElement } from 'react';

const { Default, NumerousItems, Empty } = composeStories(stories);

const setup = (element: ReactElement) => {
	const { container, queryByRole, queryAllByRole } = render(element);
	const list = queryByRole('list');
	const items = queryAllByRole('listitem');
	const links = queryAllByRole('link');
	return { container, list, items, links };
};

describe('SnsList', () => {
	test('Default', () => {
		const { container, list, items, links } = setup(<Default />);
		expect(container).toBeMolecules();
		expect(list).toBeInTheDocument();
		expect(items[0]).toBeInTheDocument();
		expect(links[0]).toBeInTheDocument();
	});
	test('NumerousItems', () => {
		const { container, list, items, links } = setup(<NumerousItems />);
		expect(container).toBeMolecules();
		expect(list).toBeInTheDocument();
		expect(items).toHaveLength(SNS_ITEMS_NUMEROUS_LENGTH);
		expect(links).toHaveLength(SNS_ITEMS_NUMEROUS_LENGTH);
	});
	test('Empty', () => {
		const { list, items, links } = setup(<Empty />);
		expect(list).not.toBeInTheDocument();
		expect(items[0]).toBeUndefined();
		expect(links[0]).toBeUndefined();
	});
});
