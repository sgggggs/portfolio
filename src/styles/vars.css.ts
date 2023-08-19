import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
	theme: {
		light: {
			colorScheme: 'light',
			background: '#FFF',
			color: '#666',
		},
		dark: {
			colorScheme: 'dark',
			background: '#000',
			color: '#888',
		},
	},
});
