import { BaseSection } from '@/components/atoms/BaseSection';
import type { FC } from 'react';
import * as styles from './styles.css';

type Props = Readonly<{
	sectionId: string;
	sectionTitle: string;
	description: string | undefined;
}>;

export const AboutSection: FC<Props> = ({ sectionId, sectionTitle, description }) => {
	return (
		<BaseSection id={sectionId} title={sectionTitle}>
			<p className={styles.description}>{description}</p>
		</BaseSection>
	);
};
