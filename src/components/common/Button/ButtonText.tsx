import { forwardRef } from 'react';
import { ButtonTextProps } from './types';
import { cn } from '@/lib/utils';

/**
 * `ButtonText` is a React functional component that renders a span element with
 * the provided children and class names. It uses `forwardRef` to pass down the ref
 * to the span element.
 *
 * @param {ButtonTextProps} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the span.
 * @param {string} [props.className] - Additional class names to apply to the span element.
 * @param {React.Ref<HTMLSpanElement>} ref - The ref to be forwarded to the span element.
 *
 * @returns {JSX.Element} The rendered span element with the provided children and class names.
 */
export const ButtonText = forwardRef<HTMLSpanElement, ButtonTextProps>(({ children, className, ...rest }, ref) => {
  return (
    <span ref={ref} className={cn('inline-flex items-center', className)} {...rest}>
      {children}
    </span>
  );
});

ButtonText.displayName = 'ButtonText';
