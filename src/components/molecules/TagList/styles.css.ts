import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars.css';

export const container = style({
	display: 'flex',
	flexWrap: 'wrap',
	gap: vars.space[1],
	listStyle: 'none',
	margin: 0,
	padding: 0,
});
