import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars.css';

export const container = style({
	marginInline: 'auto',
	padding: `0 ${vars.space[2]}`,
	maxWidth: '1120px',
});
