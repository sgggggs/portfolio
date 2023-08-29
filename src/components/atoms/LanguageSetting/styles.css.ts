import { style } from '@vanilla-extract/css';
import { theme } from '@/styles/theme.css';
import { vars } from '@/styles/vars.css';

export const trigger = style({
	display: 'flex',
	justifyContent: 'space-around',
	alignItems: 'center',
	width: '110px',
	height: '34px',
	padding: `0 ${vars.space[1]}`,
	fontSize: '14px',
	letterSpacing: '.2px',
	color: theme.object.normal,
	background: 'none',
	borderRadius: '32px',
	border: `1px solid ${theme.object.normal}`,
	overflow: 'hidden',
});

export const content = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-end',
});

export const close = style({
	display: 'flex',
	justifyContent: 'flex-end',
	alignItems: 'center',
	width: '44px',
	height: '44px',
	transform: 'translateX(4px)',
});

export const list = style({
	display: 'flex',
	flexDirection: 'column',
	gap: vars.space[1],
	fontSize: '14px',
	listStyle: 'none',
	margin: 0,
	padding: 0,
});

export const item = style({
	letterSpacing: '.4px',
	borderRight: `1px solid ${theme.object.normal}`,
});

export const linkInner = style({
	display: 'grid',
	width: '100px',
	textAlign: 'right',
	padding: `${vars.space[1]} ${vars.space[2]}`,
});
