import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { MAIN_MENU_ITEMS_NUMEROUS_ITEMS_NUM } from '@/tests/mocks/createMainMenuMock';
import * as stories from './index.stories';
import type { ReactElement } from 'react';

const { Default, NumerousItems, Empty, Open } = composeStories(stories);

const setup = (element: ReactElement) => {
	const { container, queryByRole, queryAllByRole } = render(element);
	const list = queryByRole('list');
	const items = queryAllByRole('listitem');
	const links = queryAllByRole('link');
	return { container, list, items, links };
};

describe('MainMenu', () => {
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
		expect(items).toHaveLength(MAIN_MENU_ITEMS_NUMEROUS_ITEMS_NUM);
		expect(links).toHaveLength(MAIN_MENU_ITEMS_NUMEROUS_ITEMS_NUM);
	});
	test('Empty', () => {
		const { list, items, links } = setup(<Empty />);
		expect(list).not.toBeInTheDocument();
		expect(items[0]).toBeUndefined();
		expect(links[0]).toBeUndefined();
	});
	test('Open', () => {
		const { list, items, links } = setup(<Open />);
		expect(list).toBeInTheDocument();
		expect(items[0]).toBeInTheDocument();
		expect(links[0]).toBeInTheDocument();
	});
});
