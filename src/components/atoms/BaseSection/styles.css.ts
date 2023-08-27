import { style } from '@vanilla-extract/css';
import { theme } from '@/styles/theme.css';
import { vars } from '@/styles/vars.css';

export const container = style({
	display: 'grid',
	rowGap: vars.space[1],
	padding: `${vars.space[6]} 0`,
});

export const title = style({
	color: theme.text.bold,
});
