import useTranslation from 'next-translate/useTranslation';
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
	isCurrent: boolean;
	skills: string[];
}>;

export const ExperienceListItem: FC<Props> = ({
	id,
	title,
	body,
	startDate,
	endDate,
	isCurrent,
	skills,
}) => {
	const { t } = useTranslation();

	const formattedStartDate: string = useMemo(() => {
		const start = new Date(startDate);
		return new Intl.DateTimeFormat(undefined, DATE_FORMAT_OPTIONS).format(start);
	}, [startDate]);

	const formattedEndDate: string = useMemo(() => {
		if (isCurrent) {
			return t('common:present');
		} else {
			const end = new Date(endDate);
			return new Intl.DateTimeFormat(undefined, DATE_FORMAT_OPTIONS).format(end);
		}
	}, [t, isCurrent, endDate]);

	const period: string = `${formattedStartDate} - ${formattedEndDate}`;

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
