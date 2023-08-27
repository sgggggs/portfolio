import { Tag } from '@/components/atoms/Tag';
import type { FC } from 'react';
import * as styles from './styles.css';

type Props = Readonly<{
	items: string[];
}>;

export const TagList: FC<Props> = ({ items }) => {
	if (!items || !items.length) {
		return null;
	}

	return (
		<ul className={styles.container}>
			{items.map((item, i) => (
				<li key={`${item}${i}`}>
					<Tag displayName={item} />
				</li>
			))}
		</ul>
	);
};
