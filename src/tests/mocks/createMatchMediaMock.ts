import { MEDIA_SCREEN } from '@/utils/constants';

type WindowMatchMediaMock = Window['matchMedia'];

const createMatchMediaMock = (matches: Record<string, boolean>) => (qs: string) =>
	({
		matches: matches[qs],
		addListener: () => {},
		removeListener: () => {},
	}) as unknown;

export const matchMediaMock = {
	tablet: createMatchMediaMock({
		[MEDIA_SCREEN.TABLET]: true,
		[MEDIA_SCREEN.DESKTOP]: false,
	}) as WindowMatchMediaMock,
	desktop: createMatchMediaMock({
		[MEDIA_SCREEN.TABLET]: false,
		[MEDIA_SCREEN.DESKTOP]: true,
	}) as WindowMatchMediaMock,
};
