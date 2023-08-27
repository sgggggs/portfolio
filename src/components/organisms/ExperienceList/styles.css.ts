import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars.css';

export const container = style({
	display: 'flex',
	flexDirection: 'column',
	gap: vars.space[7],
	listStyle: 'none',
	margin: 0,
	padding: 0,
});
