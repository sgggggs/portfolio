import { style } from '@vanilla-extract/css';
import { media } from '@/styles/media.css';
import { theme } from '@/styles/theme.css';

export const link = style({
	textDecoration: 'none',
	color: 'inherit',
	transition: 'color .2s',

	'@media': {
		[media.hover]: {
			':hover': {
				color: theme.object.accent,
			},
		},
	},
});
