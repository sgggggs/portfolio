import { GlobalNavigation } from '@/components/organisms/GlobalNavigation';
import type { FC } from 'react';
import * as styles from './styles.css';

type Props = Readonly<{
	isOpenMainMenu: boolean;
	onToggleMainMenu: () => void;
}>;

export const BasicHeader: FC<Props> = ({ isOpenMainMenu, onToggleMainMenu }) => {
	return (
		<header className={styles.container}>
			<div className={styles.inner}>
				<GlobalNavigation isOpenMainMenu={isOpenMainMenu} onToggleMainMenu={onToggleMainMenu} />
			</div>
		</header>
	);
};
