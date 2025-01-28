import { forwardRef } from 'react';
import { ButtonIconProps } from './types';
import { cn } from '@/lib/utils';

/**
 * `ButtonIcon` is a React functional component that renders a span element with
 * a specified class name and additional props. It uses `forwardRef` to pass down
 * the ref to the span element.
 *
 * @param {ButtonIconProps} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the span element.
 * @param {string} [props.className] - Additional class names to apply to the span element.
 * @param {React.Ref<HTMLSpanElement>} ref - The reference to the span element.
 *
 * @returns {JSX.Element} The rendered span element with the specified properties.
 */
export const ButtonIcon = forwardRef<HTMLSpanElement, ButtonIconProps>(({ children, className, ...rest }, ref) => {
  return (
    <span ref={ref} className={cn('inline-flex items-center mx-1', className)} {...rest}>
      {children}
    </span>
  );
});

ButtonIcon.displayName = 'ButtonIcon';
