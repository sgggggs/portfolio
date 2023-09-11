import { ShowcaseListItem } from '../ShowcaseListItem';
import type { FC } from 'react';
import * as styles from './styles.css';

export type ShowcaseItem = {
	id: string;
	title: string;
	label: string;
	thumbnailUrl: string;
	contentUrl: string;
};

type Props = Readonly<{ items: ShowcaseItem[] | undefined }>;

export const ShowcaseList: FC<Props> = ({ items }) => {
	if (!items || !items.length) {
		return null;
	}

	return (
		<ul className={styles.container}>
			{items.map(({ id, title, label, thumbnailUrl, contentUrl }) => (
				<li key={id}>
					<ShowcaseListItem
						id={id}
						title={title}
						label={label}
						thumbnailUrl={thumbnailUrl}
						contentUrl={contentUrl}
					/>
				</li>
			))}
		</ul>
	);
};
