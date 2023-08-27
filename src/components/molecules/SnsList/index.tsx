import type { FC, ReactNode } from 'react';
import * as styles from './styles.css';

export type SnsItem = {
	label: string;
	icon: ReactNode;
	href: string;
};

type Props = Readonly<{ items: SnsItem[] }>;

export const SnsList: FC<Props> = ({ items }) => {
	if (!items.length) {
		return null;
	}

	return (
		<ul className={styles.container}>
			{items.map(({ label, icon, href }, i) => (
				<li key={`${label}${i}`}>
					<a href={href} target="_brank" rel="noopener" aria-label={label} className={styles.link}>
						{icon}
					</a>
				</li>
			))}
		</ul>
	);
};
