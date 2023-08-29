import clsx from 'clsx';
import type { FC, ReactNode } from 'react';
import * as styles from './styles.css';

type ColumnType = 'single' | 'hybrid';

type Props = Readonly<{
	children: ReactNode;
	columnType: ColumnType;
}>;

export const ContentWrapper: FC<Props> = ({ children, columnType }) => {
	return (
		<div className={clsx(styles.container, columnType === 'hybrid' && styles.hybridColumn)}>
			{children}
		</div>
	);
};
