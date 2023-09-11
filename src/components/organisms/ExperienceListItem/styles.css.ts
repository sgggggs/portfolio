import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars.css';

export const container = style({});

export const period = style({
	margin: 0,
	fontSize: '14px',
	lineHeight: 1.6,
});

export const title = style({
	margin: 0,
});

export const body = style({
	marginTop: vars.space[2],
	lineHeight: 1.6,
	whiteSpace: 'pre-wrap',
});

export const tagList = style({
	marginTop: vars.space[2],
});
