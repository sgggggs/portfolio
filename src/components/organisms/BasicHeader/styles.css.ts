import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars.css';

export const container = style({
	position: 'sticky',
	top: 0,
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	height: vars.header.height,
	padding: `${vars.space[1]} ${vars.space[3]}`,
	backdropFilter: 'blur(8px)',
	zIndex: vars.layer.header,
});

export const inner = style({
	display: 'flex',
	justifyContent: 'flex-end',
	width: '100%',
	maxWidth: '1180px',
	marginInline: 'auto',
});
