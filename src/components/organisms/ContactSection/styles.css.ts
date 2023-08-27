import { style } from '@vanilla-extract/css';
import { theme } from '@/styles/theme.css';

export const email = style({
	fontSize: '16px',
	textDecoration: 'none',
	color: theme.text.normal,
	letterSpacing: '2px',
});
