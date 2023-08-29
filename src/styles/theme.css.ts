import { createThemeContract, createTheme } from '@vanilla-extract/css';

export const theme = createThemeContract({
	background: {
		normal: null,
		gradation: null,
	},
	object: {
		normal: null,
		accent: null,
		shadow: null,
	},
	stroke: {
		normal: null,
		accent: null,
	},
	text: {
		normal: null,
		bold: null,
		shadow: null,
	},
});

export const lightTheme = createTheme(theme, {
	background: {
		normal: '#fff',
		gradation:
			'linear-gradient(150deg, rgba(223,223,223,0.6) 0%, rgba(180,180,180,0.6) 28%, rgba(145,145,145,0.5) 100%)',
	},
	object: {
		normal: '#555',
		accent: '#000',
		shadow: '#eaeaea',
	},
	stroke: {
		normal: '#dddddd',
		accent: '#9a9a9a',
	},
	text: {
		normal: '#555',
		bold: '#111',
		shadow: '#cfcfcf',
	},
});

export const darkTheme = createTheme(theme, {
	background: {
		normal: '#000',
		gradation:
			'linear-gradient(150deg, rgba(0,0,0,0.8) 0%, rgba(54,54,54,0.7) 78%, rgba(122,122,122,0.5) 90%)',
	},
	object: {
		normal: '#888',
		accent: '#fafafa',
		shadow: '#525252',
	},
	stroke: {
		normal: '#2e2e2e',
		accent: '#9a9a9a',
	},
	text: {
		normal: '#888',
		bold: '#d5d5d5',
		shadow: '#2d2d2d',
	},
});
