import { BasicHeader } from '@/components/organisms/BasicHeader';
import type { FC, ReactNode } from 'react';

type Props = Readonly<{
	children: ReactNode;
}>;

export const BasicLayout: FC<Props> = ({ children }) => {
	return (
		<div>
			<BasicHeader />
			<main>{children}</main>
			{/* footer */}
		</div>
	);
};
