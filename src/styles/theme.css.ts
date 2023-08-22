import { createThemeContract, createTheme } from '@vanilla-extract/css';

export const theme = createThemeContract({
	background: {
		normal: null,
		gradation: null,
	},
	primary: null,
	text: {
		normal: null,
	},
});

export const lightTheme = createTheme(theme, {
	background: {
		normal: '#FFF',
		gradation:
			'linear-gradient(150deg, rgba(236,236,236,0.5312718837535014) 0%, rgba(54,54,54,0.7525603991596639) 78%, rgba(0,0,0,0.8562018557422969) 100%)',
	},
	primary: '#666',
	text: {
		normal: '#666',
	},
});

export const darkTheme = createTheme(theme, {
	background: {
		normal: '#000',
		gradation:
			'linear-gradient(150deg, rgba(0,0,0,0.8001794467787114) 0%, rgba(54,54,54,0.7525603991596639) 78%, rgba(122,122,122,0.5312718837535014) 90%)',
	},
	primary: '#888',
	text: {
		normal: '#888',
	},
});
