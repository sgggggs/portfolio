import { style } from '@vanilla-extract/css';
import { media } from '@/styles/media.css';
import { vars } from '@/styles/vars.css';

export const container = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-end',
	gap: vars.space[1],
	padding: `calc(${vars.space[8]} * 2) ${vars.space[2]} ${vars.space[2]}`,

	'@media': {
		[media.screen.desktop]: {
			padding: `calc(${vars.space[8]} * 2)  ${vars.space[4]} ${vars.space[2]}`,
		},
	},
});

export const tools = style({
	display: 'flex',
	alignItems: 'center',
	gap: vars.space[1],
});

export const themeIcon = style({
	display: 'grid',
	width: '44px',
	height: '44px',
});

const VISUAL_ALIGNMENT_OFFSET = '4px';
export const languageSetting = style({
	marginBottom: VISUAL_ALIGNMENT_OFFSET,
});

export const copyright = style({
	display: 'flex',
	justifyContent: 'flex-end',
	letterSpacing: '.1px',
});
