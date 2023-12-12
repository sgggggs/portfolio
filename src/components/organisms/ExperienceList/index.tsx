import { type FC } from 'react';
import { ExperienceListItem } from '@/components/organisms/ExperienceListItem';
import type { Experience } from '@/api/types';
import * as styles from './styles.css';

type Props = Readonly<{
	items: Experience[];
}>;

export const ExperienceList: FC<Props> = ({ items }) => {
	if (!items || !items.length) {
		return null;
	}

	return (
		<ul className={styles.container}>
			{items.map(({ id, title, body, startDate, endDate, isCurrent, skills }) => (
				<li key={id}>
					<ExperienceListItem
						id={id}
						title={title}
						body={body}
						startDate={startDate}
						endDate={endDate}
						isCurrent={isCurrent}
						skills={skills}
					/>
				</li>
			))}
		</ul>
	);
};
