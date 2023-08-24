import clsx from 'clsx';
import NextLink from 'next/link';
import type { FC } from 'react';
import * as styles from './styles.css';

export type MainMenuItems = {
	id: string;
	title: string;
	href: string;
}[];

type Props = Readonly<{
	items: MainMenuItems;
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
				<li key={id}>
					<NextLink href={href} className={styles.link} onClick={onToggle}>
						{title}
					</NextLink>
				</li>
			))}
		</ul>
	);
};
