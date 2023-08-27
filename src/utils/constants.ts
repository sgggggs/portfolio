export const THEME = ['light', 'dark'] as const;

export const LOCALES = ['en', 'ja'] as const;

export const BREAKPOINT = {
	TABLET: 768,
	DESKTOP: 1024,
} as const;

export const MEDIA_SCREEN = {
	TABLET: `screen and (min-width: ${BREAKPOINT.TABLET}px) and (max-width: ${BREAKPOINT.DESKTOP}px)`,
	DESKTOP: `screen and (min-width: ${BREAKPOINT.DESKTOP}px)`,
} as const;
