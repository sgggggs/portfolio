import { BaseSection } from '@/components/atoms/BaseSection';
import { ShowcaseList } from '../ShowcaseList';
import type { Showcase } from '@/api/types';
import type { FC } from 'react';

type Props = Readonly<{
	sectionId: string;
	sectionTitle: string;
	items: Showcase[] | undefined;
}>;

export const ShowcaseSection: FC<Props> = ({ sectionId, sectionTitle, items }) => {
	return (
		<BaseSection id={sectionId} title={sectionTitle}>
			<ShowcaseList items={items} />
		</BaseSection>
	);
};
