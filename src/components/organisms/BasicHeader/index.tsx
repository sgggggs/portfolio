import { GlobalNavigation } from '@/components/organisms/GlobalNavigation';
import type { FC } from 'react';
import * as styles from './styles.css';

export const BasicHeader: FC = () => {
	return (
		<header className={styles.container}>
			<div className={styles.inner}>
				<GlobalNavigation />
			</div>
		</header>
	);
};
