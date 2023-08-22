import { style } from '@vanilla-extract/css';
import { media } from '@/styles/media.css';
import { theme } from '@/styles/theme.css';
import { vars } from '@/styles/vars.css';

export const container = style({
	display: 'none',
	flexDirection: 'column',
	gap: vars.space[2],
	padding: `${vars.space[2]} ${vars.space[3]}`,
	overflow: 'auto',
	listStyle: 'none',
	margin: 0,

	'@media': {
		[media.screen.desktop]: {
			display: 'flex',
			flexDirection: 'row',
			padding: 0,
		},
	},
});

export const link = style({
	display: 'block',
	padding: vars.space[1],
	fontSize: '20px',
	fontWeight: 'bold',
	color: 'inherit',
	textDecoration: 'none',

	'@media': {
		[media.screen.desktop]: {
			padding: `${vars.space[1]} 0`,
		},
	},
});

export const isOpen = style({
	display: 'flex',
	position: 'absolute',
	left: 0,
	top: '60px',
	width: '100vw',
	height: '100svh',
	background: theme.background.gradation,

	'@media': {
		[media.screen.desktop]: {
			display: 'flex',
			flexDirection: 'row',
			padding: 0,
			position: 'initial',
			right: 'initial',
			top: 'initial',
			width: 'inherit',
			height: 'inherit',
			background: 'inherit',
		},
	},
});
