import useTranslation from 'next-translate/useTranslation';
import { useMemo } from 'react';
import { MainMenuButton } from '@/components/atoms/MainMenuButton';
import { MainMenu, type MainMenuItem } from '@/components/molecules/MainMenu';
import type { FC } from 'react';
import * as styles from './styles.css';

type Props = Readonly<{
	isOpenMainMenu: boolean;
	onToggleMainMenu: () => void;
}>;

export const GlobalNavigation: FC<Props> = ({ isOpenMainMenu, onToggleMainMenu }) => {
	const { t } = useTranslation();

	const mainMenuItems: MainMenuItem[] = useMemo(() => {
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
			<MainMenuButton isOpen={isOpenMainMenu} onToggle={onToggleMainMenu} />
			<MainMenu items={mainMenuItems} isOpen={isOpenMainMenu} onToggle={onToggleMainMenu} />
		</nav>
	);
};
