import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'button'> &
	Readonly<{
		text: string;
	}>;

export const CustomButton = forwardRef<HTMLButtonElement, Props>(({ text, ...props }, ref) => {
	return (
		<button {...props} ref={ref}>
			{text}
		</button>
	);
});
