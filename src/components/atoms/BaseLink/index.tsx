import NextLink, { type LinkProps } from 'next/link';
import type { ReactNode, FC } from 'react';
import * as styles from './styles.css';

type Props = Readonly<
	LinkProps & {
		href: string;
		children: ReactNode;
		label?: string;
		isExternal?: boolean;
	}
>;

export const BaseLink: FC<Props> = ({ href, children, label, isExternal, ...props }) => {
	if (isExternal) {
		return (
			<a href={href} target="_brank" rel="noopener" aria-label={label} className={styles.link}>
				{children}
			</a>
		);
	}

	return (
		<NextLink {...props} href={href} className={styles.link} aria-label={label}>
			{children}
		</NextLink>
	);
};
