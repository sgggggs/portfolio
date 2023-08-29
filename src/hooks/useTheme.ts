import { useRecoilState } from 'recoil';
import { themeState } from '@/lib/recoil/atoms/themeState';
import type { Theme } from '@/utils/types';

type UseThemeReturnType = {
	theme: Theme;
	toggleTheme: () => void;
};

export const useTheme = (): UseThemeReturnType => {
	const [theme, setTheme] = useRecoilState(themeState);

	const toggleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
		window.localStorage.setItem('theme', newTheme);
		const root = window.document.documentElement;
		root.setAttribute('data-theme', newTheme);
	};

	return { theme, toggleTheme };
};
