import { act, renderHook } from '@testing-library/react';
import { useRouter } from 'next/router';
import { MICRO_CMS_ABOUT, ABOUT_MOCK } from '@/tests/mocks/createAboutMock';
import { useGetAbout } from './useGetAbout';

describe('useGetAbout', () => {
	test('should return values that match the type About', () => {
		(useRouter as jest.Mock).mockReturnValue({
			locale: 'en',
			isReady: true,
		});

		const { result } = renderHook(() => useGetAbout(MICRO_CMS_ABOUT));
		act(() => {
			expect(result.current.data).toEqual(ABOUT_MOCK);
		});
	});
	test('should return undefined when useRouter is not ready', () => {
		(useRouter as jest.Mock).mockReturnValue({
			locale: 'en',
			isReady: false,
		});

		const { result } = renderHook(() => useGetAbout(MICRO_CMS_ABOUT));
		act(() => {
			expect(result.current.data).toBeUndefined();
		});
	});
});
