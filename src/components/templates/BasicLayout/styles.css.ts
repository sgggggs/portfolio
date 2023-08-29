import { style } from '@vanilla-extract/css';

export const container = style({
	display: 'grid',
	gridTemplateRows: 'auto 1fr auto',
	gridTemplateColumns: '100%',
	minHeight: '100vh',
});

export const isEnableBlur = style({
	filter: 'blur(5px)',
});
