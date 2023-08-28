import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';
import * as useThemeHook from '@/hooks/useTheme';
import * as stories from './index.stories';
import type { ReactElement } from 'react';

jest.mock('@/hooks/useTheme', () => {
	return {
		__esModule: true,
		...jest.requireActual<typeof import('@/hooks/useTheme')>('@/hooks/useTheme'),
	};
});

const { Default } = composeStories(stories);

const setup = (element: ReactElement) => {
	const { container, getByRole } = render(element, {
		wrapper: RecoilRoot,
	});
	const footer = getByRole('contentinfo');

	expect(container).toBeOrganisms();
	expect(footer).toBeInTheDocument();
	return { getByRole };
};

describe('BasicFooter', () => {
	beforeAll(() => {
		(useRouter as jest.Mock).mockReturnValue({
			locale: 'en',
			isReady: true,
		});
	});

	test('Default', () => {
		const { getByRole } = setup(<Default />);
		const themeSwitchButton = getByRole('button', { name: 'common:switch2LightTheme' });
		expect(themeSwitchButton).toBeInTheDocument();
	});
	test('should be no issue even when the light theme is selected', () => {
		jest.spyOn(useThemeHook, 'useTheme').mockImplementation(() => {
			return {
				theme: 'light',
				toggleTheme: () => jest.fn(),
			};
		});
		const { getByRole } = setup(<Default />);
		const themeSwitchButton = getByRole('button', { name: 'common:switch2DarkTheme' });
		expect(themeSwitchButton).toBeInTheDocument();
	});

	afterAll(() => {
		jest.clearAllMocks();
	});
});
