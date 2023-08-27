import { style } from '@vanilla-extract/css';
import { media } from '@/styles/media.css';
import { theme } from '@/styles/theme.css';

export const container = style({
	display: 'flex',
	listStyle: 'none',
	margin: 0,
	padding: 0,
});

export const link = style({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: '44px',
	height: '44px',
	color: theme.object.normal,
	transition: 'color .2s',

	'@media': {
		[media.hover]: {
			':hover': {
				color: theme.object.accent,
			},
		},
	},
});
