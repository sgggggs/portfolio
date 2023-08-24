import { globalStyle } from '@vanilla-extract/css';
import { theme } from '@/styles/theme.css';
import { vars } from '@/styles/vars.css';

globalStyle('html', {
	scrollBehavior: 'smooth',
	scrollPaddingTop: `calc(${vars.header.height} + ${vars.space[2]})`,
});

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
