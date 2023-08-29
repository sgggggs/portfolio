import { style } from '@vanilla-extract/css';
import { media } from '@/styles/media.css';
import { theme } from '@/styles/theme.css';
import { vars } from '@/styles/vars.css';

export const container = style({
	display: 'none',
	flexDirection: 'column',
	gap: vars.space[4],
	padding: `${vars.space[5]} ${vars.space[2]} `,
	overflow: 'auto',
	listStyle: 'none',
	margin: 0,

	'@media': {
		[media.screen.desktop]: {
			display: 'flex',
			flexDirection: 'row',
			gap: vars.space[3],
			padding: 0,
		},
	},
});

export const item = style({
	display: 'block',
	padding: vars.space[1],
	fontSize: '26px',
	fontWeight: 'bold',
	color: theme.object.normal,

	'@media': {
		[media.screen.desktop]: {
			fontSize: '18px',
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
