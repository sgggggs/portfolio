import { globalStyle } from '@vanilla-extract/css';
import { vars } from './vars.css';

globalStyle('html, body', {
	boxSizing: 'border-box',
});

globalStyle(':root[data-theme="light"]', {
	color: vars.theme.light.color,
	background: vars.theme.light.background,
});

globalStyle(':root[data-theme="dark"]', {
	color: vars.theme.dark.color,
	background: vars.theme.dark.background,
});
