import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import * as useThemeHook from '@/hooks/useTheme';
import { ThemeProvider } from './';
import type { ReactElement } from 'react';

jest.mock('@/hooks/useTheme', () => {
	return {
		__esModule: true,
		...jest.requireActual<typeof import('@/hooks/useTheme')>('@/hooks/useTheme'),
	};
});

const setup = (element: ReactElement) => {
	const { container } = render(element, {
		wrapper: RecoilRoot,
	});
	expect(container).toBeInTheDocument();
};

describe('Theme', () => {
	test('Default', () => {
		setup(<ThemeProvider>{'children'}</ThemeProvider>);
	});
	test('should be no issue even when the dark theme is selected', () => {
		jest.spyOn(useThemeHook, 'useTheme').mockImplementation(() => {
			return {
				theme: 'dark',
				toggleTheme: () => jest.fn(),
			};
		});

		setup(<ThemeProvider>{'children'}</ThemeProvider>);
	});
});
