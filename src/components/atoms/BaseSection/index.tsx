import type { FC, ReactNode } from 'react';
import * as styles from './styles.css';

type Props = Readonly<{
	id?: string;
	title?: string;
	children: ReactNode;
}>;

export const BaseSection: FC<Props> = ({ id, title, children }) => {
	return (
		<section className={styles.container} aria-labelledby={id}>
			<h2 id={id}>{title}</h2>
			{children}
		</section>
	);
};
