import { useTheme } from '@/hooks/useTheme';
import { useThemeUpdate } from '@/hooks/useThemeUpdate';
import { darkTheme, lightTheme } from '@/styles/theme.css';
import type { FC, ReactNode } from 'react';

type Props = Readonly<{
	children: ReactNode;
}>;

export const ThemeProvider: FC<Props> = ({ children }) => {
	const { theme } = useTheme();
	const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

	useThemeUpdate();

	return (
		<>
			{/* Prevent flash */}
			<script
				dangerouslySetInnerHTML={{
					__html: `!function(){let e;const t=window.localStorage.getItem("theme");if(null!==t)e=t;else{e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",e)}();`,
				}}
			/>
			<div id="theme" className={currentTheme}>
				{children}
			</div>
		</>
	);
};
