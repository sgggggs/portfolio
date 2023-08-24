import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars.css';

export const container = style({
	display: 'gap',
	rowGap: vars.space[2],
	padding: `${vars.space[6]} 0`,
});
