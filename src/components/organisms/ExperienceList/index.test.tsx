import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import {
	EXPERIENCE_ITEMS_NUMEROUS_LENGTH,
	EXPERIENCE_SKILLS_NUMEROUS_LENGTH,
} from '@/tests/mocks/createExperienceMock';
import * as stories from './index.stories';
import type { ReactElement } from 'react';

const { Default, NumerousItems, Empty } = composeStories(stories);

const setup = (element: ReactElement) => {
	const { container, queryAllByRole } = render(element);
	const list = queryAllByRole('list');
	const items = queryAllByRole('listitem');
	return { container, list, items };
};

describe('ExperienceList', () => {
	test('Default', () => {
		const { container, list, items } = setup(<Default />);
		expect(container).toBeOrganisms();
		expect(list[0]).toBeInTheDocument();
		expect(list[1]).toBeInTheDocument();
		expect(items[0]).toBeInTheDocument();
	});
	test('NumerousItems', () => {
		const { container, list, items } = setup(<NumerousItems />);
		expect(container).toBeOrganisms();
		expect(list[0]).toBeInTheDocument();
		expect(list[1]).toBeInTheDocument();
		expect(items).toHaveLength(
			EXPERIENCE_ITEMS_NUMEROUS_LENGTH + EXPERIENCE_SKILLS_NUMEROUS_LENGTH,
		);
	});
	test('Empty', () => {
		const { list, items } = setup(<Empty />);
		expect(list[0]).toBeUndefined();
		expect(items[0]).toBeUndefined();
	});
});
