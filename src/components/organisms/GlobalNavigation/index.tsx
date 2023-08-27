import useTranslation from 'next-translate/useTranslation';
import { useMemo } from 'react';
import { useToggle } from 'react-use';
import { MainMenuButton } from '@/components/atoms/MainMenuButton';
import { MainMenu, type MainMenuItems } from '@/components/molecules/MainMenu';
import type { FC } from 'react';
import * as styles from './styles.css';

export const GlobalNavigation: FC = () => {
	const { t } = useTranslation();
	const [isOpenMainMenu, onToggleMainMenu] = useToggle(false);

	const mainMenuItems: MainMenuItems = useMemo(() => {
		return [
			{
				id: 'about',
				title: t('common:about'),
				href: '#about',
			},
			{
				id: 'experience',
				title: t('common:experience'),
				href: '#experience',
			},
			{
				id: 'contact',
				title: t('common:contact'),
				href: '#contact',
			},
		];
	}, [t]);

	return (
		<nav className={styles.container}>
			<MainMenu items={mainMenuItems} isOpen={isOpenMainMenu} onToggle={onToggleMainMenu} />
			<MainMenuButton isOpen={isOpenMainMenu} onToggle={onToggleMainMenu} />
		</nav>
	);
};
