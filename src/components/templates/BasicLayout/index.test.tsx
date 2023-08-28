import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { useRouter } from 'next/router';
import React from 'react';
import * as reactUseHook from 'react-use';
import { RecoilRoot } from 'recoil';
import * as stories from './index.stories';
import type { ReactElement } from 'react';

jest.mock('react-use', () => {
	return {
		__esModule: true,
		...jest.requireActual<typeof import('react-use')>('react-use'),
	};
});

const IS_OPEN_MAIN_MENU_MOCK: boolean = true;
const ON_TOGGLE_MAIN_MENU_MOCK = (value: boolean) => {
	return (value = !value);
};

const { Default } = composeStories(stories);

const setup = (element: ReactElement) => {
	const { container } = render(element, {
		wrapper: RecoilRoot,
	});
	expect(container).toBeTemplates();
};

describe('BasicLayout', () => {
	beforeAll(() => {
		(useRouter as jest.Mock).mockReturnValue({
			locale: 'en',
			isReady: true,
		});
	});

	test('Default', () => {
		setup(<Default />);
	});

	test('should be no issue even when the main menu is open', () => {
		jest.spyOn(reactUseHook, 'useToggle').mockImplementation(() => {
			return [IS_OPEN_MAIN_MENU_MOCK, ON_TOGGLE_MAIN_MENU_MOCK];
		});
		setup(<Default />);
	});

	afterAll(() => {
		jest.clearAllMocks();
	});
});
