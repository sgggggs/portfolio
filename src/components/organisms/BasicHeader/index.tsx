import type { FC } from 'react';
import * as styles from './styles.css';

export const BasicHeader: FC = () => {
	return (
		<header className={styles.container}>
			<div>{'Logo'}</div>
			<nav>{'Nav'}</nav>
		</header>
	);
};
