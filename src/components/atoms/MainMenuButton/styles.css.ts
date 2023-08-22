import { style } from '@vanilla-extract/css';
import { media } from '@/styles/media.css';
import { theme } from '@/styles/theme.css';

const barStyle = {
	content: '',
	display: 'block',
	height: '1px',
	backgroundColor: theme.primary,
	transition: 'transform .15s ease',
};

export const container = style({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'flex-end',
	width: '44px',
	height: '44px',
	selectors: {
		'&:before': {
			...barStyle,
			width: '28px',
			transform: 'translateY(-2px)',
		},
		'&:after': {
			...barStyle,
			width: '20px',
			transform: 'translateY(2px)',
		},
	},
	'@media': {
		[media.screen.desktop]: {
			display: 'none',
		},
	},
});

export const isOpen = style({
	selectors: {
		'&:before': {
			width: '24px',
			transform: 'rotate(-30deg)',
		},
		'&:after': {
			width: '24px',
			transform: 'rotate(30deg)',
		},
	},
});
