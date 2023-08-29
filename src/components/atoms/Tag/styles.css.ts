import { style } from '@vanilla-extract/css';
import { theme } from '@/styles/theme.css';
import { vars } from '@/styles/vars.css';

export const container = style({
	padding: vars.space[1],
	color: theme.object.normal,
	fontSize: '12px',
	fontWeight: 'bold',
	lineHeight: 1,
	background: theme.background.gradation,
	borderRadius: '8px',
});
