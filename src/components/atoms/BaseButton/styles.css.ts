import { style } from '@vanilla-extract/css';
import { media } from '@/styles/media.css';
import { theme } from '@/styles/theme.css';

export const container = style({
	padding: 0,
	border: 'none',
	font: 'inherit',
	color: 'inherit',
	background: 'none',
	appearance: 'none',
	cursor: 'pointer',

	'@media': {
		[media.hover]: {
			':hover': {
				color: theme.object.accent,
			},
		},
	},
});

export const isDisabled = style({
	cursor: 'initial',
});
