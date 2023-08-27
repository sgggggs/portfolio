import { style } from '@vanilla-extract/css';
import { media } from '@/styles/media.css';
import { vars } from '@/styles/vars.css';

export const container = style({
	marginInline: 'auto',
	padding: `${vars.space[4]} ${vars.space[2]} 0`,
	maxWidth: '1120px',
});

export const hybridColumn = style({
	'@media': {
		[media.screen.desktop]: {
			display: 'grid',
			gridTemplateColumns: '.45fr .55fr',
			columnGap: '80px',
		},
	},
});
