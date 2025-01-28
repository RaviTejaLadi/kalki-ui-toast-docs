import { forwardRef } from 'react';
import type { BoxProps } from './types';
import { boxVariants } from './boxVariants';
import { cn } from '@/lib/utils';

/**
 * A Box component that serves as a flexible container with various styling options.
 *
 * @param {string} [width='auto'] - The width of the box.
 * @param {string} [height='auto'] - The height of the box.
 * @param {boolean} [shadow] - Whether the box should have a shadow.
 * @param {boolean} [rounded=false] - Whether the box should have rounded corners.
 * @param {React.ReactNode} children - The content to be rendered inside the box.
 * @param {boolean} [outlined=false] - Whether the box should have an outline.
 * @param {string} [className] - Additional class names to apply to the box.
 * @param {string} [margin='0'] - The margin around the box.
 * @param {string} [padding='0'] - The padding inside the box.
 * @param {string} [color] - The text color of the box.
 * @param {string} [backgroundColor] - The background color of the box.
 * @param {string} [display='block'] - The display property of the box.
 * @param {string} [flexDirection] - The flex direction of the box if it is a flex container.
 * @param {string} [flexWrap] - The flex wrap property of the box if it is a flex container.
 * @param {string} [justifyContent] - The justify content property of the box if it is a flex container.
 * @param {string} [alignItems] - The align items property of the box if it is a flex container.
 * @param {string} [alignContent] - The align content property of the box if it is a flex container.
 * @param {string} [gap] - The gap between flex items if the box is a flex container.
 * @param {React.CSSProperties} [style] - Additional inline styles to apply to the box.
 * @param {React.Ref<HTMLDivElement>} ref - The ref to be forwarded to the box element.
 * @param {object} rest - Additional props to be spread onto the box element.
 *
 * @returns {JSX.Element} The rendered Box component.
 */
const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      width = 'auto',
      height = 'auto',
      shadow,
      rounded = false,
      children,
      outlined = false,
      className,
      margin = '0',
      padding = '0',
      color,
      backgroundColor,
      display = 'block',
      flexDirection,
      flexWrap,
      justifyContent,
      alignItems,
      alignContent,
      gap,
      style,
      ...rest
    },
    ref
  ) => {
    const classNames = boxVariants({
      display,
      shadow,
      rounded,
      outlined,
      flexDirection,
      flexWrap,
      justifyContent,
      alignItems,
      alignContent,
      gap,
    });

    const inlineStyles = {
      width,
      height,
      margin,
      padding,
      color,
      backgroundColor,
      ...style,
    };

    return (
      <div style={inlineStyles} ref={ref} className={cn(classNames, className)} {...rest}>
        {children}
      </div>
    );
  }
);

Box.displayName = 'Box';

export default Box;
export { BoxProps };
