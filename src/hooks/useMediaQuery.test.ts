import { renderHook } from '@testing-library/react';
import { matchMediaMock } from '@/tests/mocks/createMatchMediaMock';
import { useMediaQuery } from './useMediaQuery';

describe('useMediaQuery', () => {
	test('tablet should be true when the window size is 768px and less than 1024px', () => {
		window.matchMedia = matchMediaMock.tablet;
		const { result } = renderHook(() => useMediaQuery());
		expect(result.current.isTabletMediaQuery).toBe(true);
		expect(result.current.isDesktopMediaQuery).toBe(false);
	});

	test('desktop should be true when the window size is 1024px or more', () => {
		window.matchMedia = matchMediaMock.desktop;
		const { result } = renderHook(() => useMediaQuery());
		expect(result.current.isTabletMediaQuery).toBe(false);
		expect(result.current.isDesktopMediaQuery).toBe(true);
	});
});
