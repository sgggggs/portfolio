import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
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
