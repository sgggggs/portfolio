import { style } from '@vanilla-extract/css';
import { theme } from '@/styles/theme.css';
import { vars } from '@/styles/vars.css';

export const item = style({
	display: 'flex',
	alignItems: 'center',
	gap: vars.space[3],
	padding: vars.space[2],
	border: `1px solid ${theme.stroke.normal}`,
	borderRadius: '8px',
	overflow: 'hidden',
});

export const thumbnail = style({
	borderRadius: '8px',
	overflow: 'hidden',
	objectFit: 'cover',
	flexShrink: 0,
});

export const titleContainer = style({
	display: 'inline-grid',
	gridTemplateColumns: 'auto 16px',
	alignItems: 'center',
	gap: vars.space[1],
});

export const title = style({
	margin: 0,
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
});

export const label = style({
	margin: `${vars.space[1]} 0 0`,
	fontSize: '14px',
	lineHeight: 1.2,
	display: '-webkit-box',
	WebkitLineClamp: 2,
	WebkitBoxOrient: 'vertical',
	overflow: 'hidden',
});
