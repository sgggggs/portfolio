import { renderHook, act } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useTheme } from './useTheme';

describe('useTheme', () => {
	test('The default theme value should be dark', () => {
		const { result } = renderHook(() => useTheme(), {
			wrapper: RecoilRoot,
		});

		expect(result.current.theme).toEqual('dark');
	});

	test('Executing toggleTheme switches the theme value.', () => {
		const { result } = renderHook(() => useTheme(), {
			wrapper: RecoilRoot,
		});

		expect(result.current.theme).toEqual('dark'); // default theme value

		act(() => {
			result.current.toggleTheme();
		});
		expect(result.current.theme).toEqual('light');

		act(() => {
			result.current.toggleTheme();
		});
		expect(result.current.theme).toEqual('dark');
	});
});
