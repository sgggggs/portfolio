import { BaseLink } from '@/components/atoms/BaseLink';
import { BaseSection } from '@/components/atoms/BaseSection';
import type { FC } from 'react';
import * as styles from './styles.css';

type Props = Readonly<{
	sectionId: string;
	sectionTitle: string;
	email: string | undefined;
}>;

export const ContactSection: FC<Props> = ({ sectionId, sectionTitle, email }) => {
	const formattedEmail = `mailto:${email}`;

	return (
		<BaseSection id={sectionId} title={sectionTitle}>
			<div className={styles.email}>
				<BaseLink href={formattedEmail}>{email}</BaseLink>
			</div>
		</BaseSection>
	);
};
