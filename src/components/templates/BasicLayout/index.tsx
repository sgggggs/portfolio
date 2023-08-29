import clsx from 'clsx';
import { useMemo, type FC, type ReactNode } from 'react';
import { useToggle } from 'react-use';
import { BasicFooter } from '@/components/organisms/BasicFooter';
import { BasicHeader } from '@/components/organisms/BasicHeader';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import * as styles from './styles.css';

type Props = Readonly<{
	children: ReactNode;
}>;

export const BasicLayout: FC<Props> = ({ children }) => {
	const [isOpenMainMenu, onToggleMainMenu] = useToggle(false);
	const { isDesktopMediaQuery } = useMediaQuery();

	const isEnableBlur = useMemo(() => {
		return !isDesktopMediaQuery && isOpenMainMenu;
	}, [isDesktopMediaQuery, isOpenMainMenu]);

	return (
		<div className={styles.container}>
			<BasicHeader isOpenMainMenu={isOpenMainMenu} onToggleMainMenu={onToggleMainMenu} />
			<main className={clsx(isEnableBlur && styles.isEnableBlur)}>{children}</main>
			<BasicFooter />
		</div>
	);
};
