import type { FC, ReactNode } from 'react';
import * as styles from './styles.css';

type Props = Readonly<{
	children: ReactNode;
}>;

export const ContentWrapper: FC<Props> = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};
