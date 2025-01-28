import { ButtonHTMLAttributes, ReactNode } from 'react';
import { buttonVariants } from './buttonVariants';
import { VariantProps } from 'class-variance-authority';

/**
 * Props for the Button component.
 *
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 * @extends VariantProps<typeof buttonVariants>
 *
 * @property {boolean} [disabled] - Indicates whether the button is disabled.
 * @property {() => void} [onClick] - Function to handle the button click event.
 * @property {ReactNode} children - The content to be displayed inside the button.
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  loader?: ReactNode;
  isPending?: boolean;
  isPendingText?: string;
}

/**
 * Props for the ButtonIcon component.
 *
 * @interface ButtonIconProps
 * @property {ReactNode} children - The content to be displayed inside the button.
 * @property {string} [className] - Optional additional CSS class names to apply to the button.
 */
interface ButtonIconProps {
  children: ReactNode;
  className?: string;
}

/**
 * Props for the ButtonText component.
 *
 * @interface ButtonTextProps
 * @property {ReactNode} children - The content to be displayed inside the button.
 * @property {string} [className] - Optional additional CSS class names to apply to the button.
 */
interface ButtonTextProps {
  children: ReactNode;
  className?: string;
}

export type { ButtonProps, ButtonIconProps, ButtonTextProps };
