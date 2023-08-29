import clsx from 'clsx';
import { BaseLink } from '@/components/atoms/BaseLink';
import type { FC } from 'react';
import * as styles from './styles.css';

export type MainMenuItem = {
	id: string;
	title: string;
	href: string;
};

type Props = Readonly<{
	items: MainMenuItem[];
	isOpen: boolean;
	onToggle: () => void;
}>;

export const MainMenu: FC<Props> = ({ items, isOpen, onToggle }) => {
	if (!items.length) {
		return null;
	}

	return (
		<ul className={clsx(styles.container, isOpen && styles.isOpen)}>
			{items.map(({ id, title, href }) => (
				<li key={id} className={styles.item}>
					<BaseLink href={href} onClick={isOpen ? onToggle : undefined}>
						{title}
					</BaseLink>
				</li>
			))}
		</ul>
	);
};
