import { style, keyframes } from '@vanilla-extract/css';
import { media } from '@/styles/media.css';
import { theme } from '@/styles/theme.css';
import { vars } from '@/styles/vars.css';

export const container = style({
	display: 'flex',
	justifyContent: 'center',

	// NOTE: Preventing ios safari layering bug
	willChange: 'transform',

	'@media': {
		[media.screen.desktop]: {
			marginTop: vars.space[8],
		},
	},
});

const shine = keyframes({
	'0%': { backgroundPosition: '100% 50%' },
	'100%': { backgroundPosition: '0% 50%' },
});

export const card = style({
	// Layout
	display: 'grid',
	gridTemplateRows: '1fr auto',
	gridTemplateColumns: '100%',

	// Size
	aspectRatio: '2/3',
	width: '84vw',
	maxHeight: 500,

	// Decoration
	padding: `${vars.space[2]} ${vars.space[2]}`,
	background: theme.background.gradation,
	backgroundImage:
		'linear-gradient(70deg,rgb(211, 209, 209, 0.3) 45%, #fff 50%, rgb(211, 209, 209, 0.3) 55%)',
	backgroundSize: '500% 100%',
	borderRadius: '8px',
	boxShadow: `0px 0px 0px 2px ${theme.object.shadow}`,
	overflow: 'hidden',

	// Animation
	animationName: shine,
	animationDuration: '.8s',
	animationDelay: '3s',
	animationTimingFunction: 'linear',

	'@media': {
		[media.screen.tablet]: {
			maxHeight: 400,
		},
		[media.screen.desktop]: {
			position: 'sticky',
			top: `calc(${vars.header.height} * 2)`,
			width: '100%',
			maxHeight: 300,
		},
	},
});

export const displayName = style({
	marginBottom: 0,
	textShadow: `2px 1px 2px ${theme.text.shadow}`,
	letterSpacing: '.9px',
});

export const profession = style({
	marginTop: vars.space[1],
	textShadow: `2px 1px 2px ${theme.text.shadow}`,
	marginLeft: '3px',
	letterSpacing: '.9px',
});

export const profileImage = style({
	border: `1px solid ${theme.stroke.accent}`,
	borderRadius: '50%',
	overflow: 'hidden',
	filter: 'grayscale(1)',
});

export const snsList = style({
	display: 'flex',
	justifyContent: 'flex-end',
});
