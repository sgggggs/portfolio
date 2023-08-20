import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars.css';

export const container = style({
	position: 'sticky',
	top: 0,
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: `${vars.space[1]} ${vars.space[3]}`,
	backdropFilter: 'blur(8px)',
});
