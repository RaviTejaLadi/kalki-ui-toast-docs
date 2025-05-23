import React, { forwardRef } from 'react';
import { buttonVariants } from './buttonVariants';
import type { ButtonProps, ButtonIconProps, ButtonTextProps } from './types';
import { ButtonIcon } from './ButtonIcon';
import { ButtonText } from './ButtonText';
import { Loader } from 'lucide-react';

/**
 * A customizable button component.
 *
 * @component
 * @param {boolean} [disabled=false] - If true, the button will be disabled.
 * @param {() => void} [onClick=() => {}] - Function to call when the button is clicked.
 * @param {string} variant - The variant of the button (e.g., 'primary', 'secondary').
 * @param {string} size - The size of the button (e.g., 'small', 'medium', 'large').
 * @param {boolean} raised - If true, the button will have a raised appearance.
 * @param {boolean} rounded - If true, the button will have rounded corners.
 * @param {string} [className=''] - Additional CSS classes to apply to the button.
 * @param {React.CSSProperties} [style={}] - Inline styles to apply to the button.
 * @param {React.ReactNode} children - The content to display inside the button.
 * @param {React.Ref<HTMLButtonElement>} ref - A ref to the button element.
 * @param {object} rest - Additional props to spread onto the button element.
 *
 * @returns {JSX.Element} The rendered button component.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      disabled = false,
      onClick = undefined,
      variant,
      size,
      raised,
      rounded,
      className = '',
      style = {},
      children,
      loader,
      isPending = false,
      isPendingText = 'Loading...',
      ...rest
    },
    ref
  ) => {
    const buttonClasses = buttonVariants({
      variant,
      size,
      raised,
      rounded,
      className,
    });

    return (
      <button
        className={buttonClasses}
        style={style}
        onClick={onClick}
        disabled={disabled || isPending}
        ref={ref}
        {...rest}
      >
        {isPending ? (
          <span className="flex gap-2 items-center justify-center">
            {loader || <Loader className="size-4 animate-spin" />}
            <span>{isPendingText}</span>
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Object.assign(
  Button as React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>,
  {
    Icon: ButtonIcon,
    Text: ButtonText,
  }
);

export { ButtonIcon, ButtonText, ButtonProps, ButtonIconProps, ButtonTextProps };
