import useTranslation from 'next-translate/useTranslation';
import { useMemo, type FC } from 'react';
import { BaseButton } from '@/components/atoms/BaseButton';
import { LanguageSetting } from '@/components/atoms/LanguageSetting';
import { SunIcon } from '@/components/icons';
import { MoonIcon } from '@/components/icons';
import { useTheme } from '@/hooks/useTheme';
import * as styles from './styles.css';

const year = new Date().getFullYear();
const COPYRIGHT = `${year} ${process.env.NEXT_PUBLIC_COPYRIGHT}`;

export const BasicFooter: FC = () => {
	const { theme, toggleTheme } = useTheme();
	const { t } = useTranslation();

	const selectedThemeItem: { label: string; icon: JSX.Element } = useMemo(() => {
		return theme === 'dark'
			? { label: t('common:switch2LightTheme'), icon: <MoonIcon size={18} /> }
			: { label: t('common:switch2DarkTheme'), icon: <SunIcon size={18} /> };
	}, [t, theme]);

	return (
		<footer className={styles.container}>
			<div className={styles.tools}>
				<div className={styles.themeIcon}>
					<BaseButton type="button" onClick={toggleTheme} aria-label={selectedThemeItem.label}>
						{selectedThemeItem.icon}
					</BaseButton>
				</div>

				<div className={styles.languageSetting}>
					<LanguageSetting />
				</div>
			</div>
			<small className={styles.copyright}>&copy; {COPYRIGHT}</small>
		</footer>
	);
};
