import { act, renderHook } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useThemeUpdate } from './useThemeUpdate';

const setThemeMock = jest.fn();
jest.mock('recoil', () => {
	return {
		__esModule: true,
		...jest.requireActual<typeof import('recoil')>('recoil'),
		useSetRecoilState: () => setThemeMock,
	};
});

describe('useThemeUpdate', () => {
	beforeEach(() => {
		setThemeMock.mockClear();
	});

	test('should execute setTheme when data-theme is dark', () => {
		const rootElement = document.documentElement;
		rootElement.setAttribute('data-theme', 'dark');

		renderHook(() => useThemeUpdate(), {
			wrapper: RecoilRoot,
		});

		act(() => {
			expect(setThemeMock).toHaveBeenCalledTimes(1);
		});
	});

	test('should execute setTheme when data-theme is light', () => {
		const rootElement = document.documentElement;
		rootElement.setAttribute('data-theme', 'light');

		renderHook(() => useThemeUpdate(), {
			wrapper: RecoilRoot,
		});

		act(() => {
			expect(setThemeMock).toHaveBeenCalledTimes(1);
		});
	});

	test.each(['foo', 'bar'])(
		'should not execute setTheme if data-theme is neither dark nor light',
		(value) => {
			const rootElement = document.documentElement;
			rootElement.setAttribute('data-theme', value);

			renderHook(() => useThemeUpdate(), {
				wrapper: RecoilRoot,
			});

			act(() => {
				expect(setThemeMock).not.toHaveBeenCalled();
			});
		},
	);
});
