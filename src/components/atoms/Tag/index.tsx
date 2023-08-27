import type { FC } from 'react';
import * as styles from './styles.css';

type Props = Readonly<{
	displayName: string;
}>;

export const Tag: FC<Props> = ({ displayName }) => {
	return <div className={styles.container}>{displayName}</div>;
};
