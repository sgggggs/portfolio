import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars.css';

export const container = style({
	display: 'grid',
	placeItems: 'center',
	minHeight: '100vh',
});

export const inner = style({
	display: 'flex',
	flexDirection: 'column',
	gap: vars.space[8],
	textAlign: 'center',
});

export const title = style({
	fontSize: '46px',
});

export const description = style({
	fontSize: '16px',
	letterSpacing: '1px',
});

export const link = style({
	padding: `${vars.space[5]} 0`,
	letterSpacing: '.6px',
	textDecoration: 'underline',
});
