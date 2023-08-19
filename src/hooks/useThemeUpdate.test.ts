import { renderHook } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useThemeUpdate } from './useThemeUpdate';

describe('useThemeUpdate', () => {
	test('Todo: test', () => {
		renderHook(() => useThemeUpdate(), {
			wrapper: RecoilRoot,
		});
	});
});
