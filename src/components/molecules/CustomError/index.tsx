import useTranslation from 'next-translate/useTranslation';
import { BaseLink } from '@/components/atoms/BaseLink';
import type { FC } from 'react';
import * as styles from './styles.css';

type Props = Readonly<{
	title: string;
	description: string;
}>;

export const CustomError: FC<Props> = ({ title, description }) => {
	const { t } = useTranslation();

	return (
		<div className={styles.container}>
			<div className={styles.inner}>
				<div>
					<h1 className={styles.title}>{title}</h1>
					<p className={styles.description}>{description}</p>
				</div>

				<div className={styles.link}>
					<BaseLink href="/">{t('common:back2Home')}</BaseLink>
				</div>
			</div>
		</div>
	);
};
