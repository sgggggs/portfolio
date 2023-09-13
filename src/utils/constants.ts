export const THEME = ['light', 'dark'] as const;

export const DEFAULT_LOCALE = 'en';
export const LOCALES = [DEFAULT_LOCALE, 'ja'] as const;

export const BREAKPOINT = {
	TABLET: 768,
	DESKTOP: 1024,
} as const;

export const MEDIA_SCREEN = {
	TABLET: `screen and (min-width: ${BREAKPOINT.TABLET}px) and (max-width: ${BREAKPOINT.DESKTOP}px)`,
	DESKTOP: `screen and (min-width: ${BREAKPOINT.DESKTOP}px)`,
} as const;

export const BASE_HEAD_TITLE = process.env.NEXT_PUBLIC_BASE_HEAD_TITLE;
