import { clsx } from 'clsx';
import { forwardRef, type ComponentProps, ComponentPropsWithoutRef } from 'react';
import * as styles from './styles.css';

type ButtonType = Exclude<ComponentProps<'button'>['type'], undefined>;

type Props = Omit<
	ComponentPropsWithoutRef<'button'> & {
		type: ButtonType;
	},
	'className'
>;

export const BaseButton = forwardRef<HTMLButtonElement, Props>(
	({ children, disabled, ...props }, ref) => {
		return (
			<button
				{...props}
				ref={ref}
				disabled={disabled}
				className={clsx(styles.container, disabled && styles.isDisabled)}
			>
				{children}
			</button>
		);
	},
);
