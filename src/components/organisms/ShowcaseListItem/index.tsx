import NextImage from 'next/image';
import { BaseLink } from '@/components/atoms/BaseLink';
import { ExternalLinkIcon } from '@/components/icons';
import type { FC } from 'react';
import * as styles from './styles.css';

type Props = Readonly<{
	id: string;
	title: string;
	label: string;
	thumbnailUrl: string;
	contentUrl: string;
}>;

export const ShowcaseListItem: FC<Props> = ({ id, title, contentUrl, label, thumbnailUrl }) => {
	return (
		<section aria-labelledby={id}>
			<BaseLink href={contentUrl} label={label} isExternal>
				<div className={styles.item}>
					<NextImage
						src={thumbnailUrl}
						width={120}
						height={90}
						alt={label}
						className={styles.thumbnail}
					/>
					<div>
						<div className={styles.titleContainer}>
							<h3 id={id} className={styles.title}>
								{title}
							</h3>
							<ExternalLinkIcon size={16} />
						</div>
						<p className={styles.label}>{label}</p>
					</div>
				</div>
			</BaseLink>
		</section>
	);
};
