import { useMedia } from 'react-use';
import { MEDIA_SCREEN } from '@/utils/constants';

type UseMediaReturnType = {
	isTabletMediaQuery: boolean;
	isDesktopMediaQuery: boolean;
};

export const useMediaQuery = (): UseMediaReturnType => {
	const isTabletMediaQuery = useMedia(MEDIA_SCREEN.TABLET);
	const isDesktopMediaQuery = useMedia(MEDIA_SCREEN.DESKTOP);

	return { isTabletMediaQuery, isDesktopMediaQuery };
};
