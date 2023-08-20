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
	space: {
		1: '8px',
		2: '16px',
		3: '24px',
		4: '32px',
		5: '40px',
		6: '48px',
		7: '56px',
		8: '64px',
	},
});
