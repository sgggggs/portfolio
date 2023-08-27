import { type FC } from 'react';
import { useMemo } from 'react';
import { TagList } from '@/components/molecules/TagList';
import * as styles from './styles.css';

const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
	year: 'numeric',
	month: 'short',
};

type Props = Readonly<{
	id: string;
	title: string;
	body: string;
	startDate: string;
	endDate: string;
	skills: string[];
}>;

export const ExperienceListItem: FC<Props> = ({ id, title, body, startDate, endDate, skills }) => {
	const period: string = useMemo(() => {
		const start = new Date(startDate);
		const end = new Date(endDate);

		const formattedStartDate = new Intl.DateTimeFormat(undefined, DATE_FORMAT_OPTIONS).format(
			start,
		);
		const formattedEndDate = new Intl.DateTimeFormat(undefined, DATE_FORMAT_OPTIONS).format(end);

		return `${formattedStartDate} - ${formattedEndDate}`;
	}, [startDate, endDate]);

	return (
		<section aria-labelledby={id} className={styles.container}>
			<p className={styles.period}>{period}</p>
			<h3 id={id} className={styles.title}>
				{title}
			</h3>
			<p className={styles.body}>{body}</p>

			<div className={styles.tagList}>
				<TagList items={skills} />
			</div>
		</section>
	);
};
