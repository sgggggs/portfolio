import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { themeState } from '@/lib/recoil/atoms/themeState';
import { THEME } from '@/utils/constants';
import { isIncluded } from '@/utils/isIncluded';

export const useThemeUpdate = (): void => {
	const setTheme = useSetRecoilState(themeState);

	useEffect(() => {
		const root = window.document.documentElement;
		const initialThemeValue = root.getAttribute('data-theme');

		if (isIncluded(THEME, initialThemeValue)) {
			setTheme(initialThemeValue);
		}
	}, [setTheme]);
};
