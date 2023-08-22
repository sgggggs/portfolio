import { style } from '@vanilla-extract/css';

export const container = style({
	padding: 0,
	border: 'none',
	font: 'inherit',
	color: 'inherit',
	background: 'none',
	appearance: 'none',
	cursor: 'pointer',
});

export const isDisabled = style({
	cursor: 'initial',
});
