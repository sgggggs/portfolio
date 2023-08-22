import { globalStyle } from '@vanilla-extract/css';
import { theme } from '@/styles/theme.css';

globalStyle(':root[data-theme="light"]', {
	colorScheme: 'light',
});

globalStyle(':root[data-theme="dark"]', {
	colorScheme: 'dark',
});

globalStyle('#theme', {
	color: theme.text.normal,
	background: theme.background.normal,
});
