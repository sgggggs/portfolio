import clsx from 'clsx';
import useTranslation from 'next-translate/useTranslation';
import { useMemo, type FC } from 'react';
import { useLockBodyScroll } from 'react-use';
import { BaseButton } from '@/components/atoms/BaseButton';
import { useIsClient } from '@/hooks/useIsClient';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import * as styles from './styles.css';

type Props = Readonly<{
	isOpen: boolean;
	onToggle: () => void;
}>;

export const MainMenuButton: FC<Props> = ({ isOpen, onToggle }) => {
	const { t } = useTranslation();
	const label = isOpen ? t('common:menuClose') : t('common:menuOpen');

	// lock the body scroll when the main menu is open
	const isClient = useIsClient();
	const { isDesktopMediaQuery } = useMediaQuery();
	const isLocked = useMemo(
		() => isClient && !isDesktopMediaQuery && isOpen,
		[isClient, isDesktopMediaQuery, isOpen],
	);
	useLockBodyScroll(isLocked);

	return (
		<>
			<BaseButton type="button" onClick={onToggle} aria-label={label}>
				<div className={clsx(styles.container, isOpen && styles.isOpen)} />
			</BaseButton>
		</>
	);
};
