import clsx from 'clsx';
import { useToggle } from 'react-use';
import { BasicFooter } from '@/components/organisms/BasicFooter';
import { BasicHeader } from '@/components/organisms/BasicHeader';
import type { FC, ReactNode } from 'react';
import * as styles from './styles.css';

type Props = Readonly<{
	children: ReactNode;
}>;

export const BasicLayout: FC<Props> = ({ children }) => {
	const [isOpenMainMenu, onToggleMainMenu] = useToggle(false);

	return (
		<div className={styles.container}>
			<BasicHeader isOpenMainMenu={isOpenMainMenu} onToggleMainMenu={onToggleMainMenu} />
			<main className={clsx(isOpenMainMenu && styles.isOpenMainMenu)}>{children}</main>
			<BasicFooter />
		</div>
	);
};
