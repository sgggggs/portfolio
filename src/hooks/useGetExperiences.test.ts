import { act, renderHook } from '@testing-library/react';
import { useRouter } from 'next/router';
import {
	createMicroCMSExperienceListMock,
	createExperienceItemsMock,
} from '@/tests/mocks/createExperienceMock';
import { useGetExperiences } from './useGetExperiences';

const ITEMS_LENGTH = 3;
const MICRO_CMS_EXPERIENCE_LIST_MOCK = createMicroCMSExperienceListMock(ITEMS_LENGTH);
const EXPERIENCE_ITEMS_MOCK = createExperienceItemsMock(ITEMS_LENGTH);

describe('useGetExperiences', () => {
	test('should return values that match the type Experience[]', () => {
		(useRouter as jest.Mock).mockReturnValue({
			locale: 'en',
			isReady: true,
		});

		const { result } = renderHook(() => useGetExperiences(MICRO_CMS_EXPERIENCE_LIST_MOCK));
		act(() => {
			expect(result.current.data).toEqual(EXPERIENCE_ITEMS_MOCK);
		});
	});

	test('should return undefined when useRouter is not ready', () => {
		(useRouter as jest.Mock).mockReturnValue({
			locale: 'en',
			isReady: false,
		});

		const { result } = renderHook(() => useGetExperiences(MICRO_CMS_EXPERIENCE_LIST_MOCK));
		act(() => {
			expect(result.current.data).toBeUndefined();
		});
	});
});
