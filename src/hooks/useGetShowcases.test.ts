import { act, renderHook } from '@testing-library/react';
import { useRouter } from 'next/router';
import {
	createMicroCMSShowcaseListMock,
	createShowcaseItemsMock,
} from '@/tests/mocks/createShowcaseMock';
import { useGetShowcases } from './useGetShowcases';

const ITEMS_LENGTH = 3;
const MICRO_CMS_SHOWCASE_LIST_MOCK = createMicroCMSShowcaseListMock(ITEMS_LENGTH);
const SHOWCASE_ITEMS_MOCK = createShowcaseItemsMock(ITEMS_LENGTH);

describe('useGetShowcases', () => {
	test('should return values that match the type Showcase[]', () => {
		(useRouter as jest.Mock).mockReturnValue({
			locale: 'en',
			isReady: true,
		});

		const { result } = renderHook(() => useGetShowcases(MICRO_CMS_SHOWCASE_LIST_MOCK));
		act(() => {
			expect(result.current.data).toEqual(SHOWCASE_ITEMS_MOCK);
		});
	});

	test('should return undefined when useRouter is not ready', () => {
		(useRouter as jest.Mock).mockReturnValue({
			locale: 'en',
			isReady: false,
		});

		const { result } = renderHook(() => useGetShowcases(MICRO_CMS_SHOWCASE_LIST_MOCK));
		act(() => {
			expect(result.current.data).toBeUndefined();
		});
	});
});
