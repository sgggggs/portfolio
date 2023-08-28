import type { FC } from 'react';

type Props = Readonly<{
	size: number;
}>;

export const LinkedinIcon: FC<Props> = ({ size }) => {
	return (
		<svg width={size} height={size} viewBox="0 0 44 44" fill="none" role="img" aria-hidden="true">
			<path
				fill="currentColor"
				d="M36.08 3.52H7.92a4.402 4.402 0 0 0-4.4 4.4v28.16c0 2.429 1.971 4.4 4.4 4.4h28.16c2.429 0 4.4-1.971 4.4-4.4V7.92c0-2.429-1.971-4.4-4.4-4.4ZM14.96 17.6v16.72H9.68V17.6h5.28Zm-5.28-4.866c0-1.232 1.056-2.174 2.64-2.174s2.578.942 2.64 2.174c0 1.232-.986 2.226-2.64 2.226-1.584 0-2.64-.994-2.64-2.226ZM34.32 34.32h-5.28v-8.8c0-1.76-.88-3.52-3.08-3.555h-.07c-2.13 0-3.01 1.813-3.01 3.555v8.8H17.6V17.6h5.28v2.253s1.698-2.253 5.113-2.253c3.493 0 6.327 2.402 6.327 7.269v9.451Z"
			/>
		</svg>
	);
};
