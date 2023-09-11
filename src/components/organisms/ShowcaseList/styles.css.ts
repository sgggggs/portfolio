import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars.css';

export const container = style({
	display: 'grid',
	rowGap: vars.space[3],
	listStyleType: 'none',
	margin: 0,
	padding: 0,
});
