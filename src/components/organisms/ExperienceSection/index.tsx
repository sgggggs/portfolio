import { Experience } from '@/api/types';
import { BaseSection } from '@/components/atoms/BaseSection';
import { ExperienceList } from '@/components/organisms/ExperienceList';
import type { FC } from 'react';

type Props = Readonly<{
	sectionId: string;
	sectionTitle: string;
	items: Experience[] | undefined;
}>;

export const ExperienceSection: FC<Props> = ({ sectionId, sectionTitle, items }) => {
	return (
		<BaseSection id={sectionId} title={sectionTitle}>
			<ExperienceList items={items} />
		</BaseSection>
	);
};
