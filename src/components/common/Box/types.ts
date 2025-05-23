import { VariantProps } from 'class-variance-authority';
import { boxVariants } from './boxVariants';

/**
 * Props for the Box component.
 *
 * @extends {React.HTMLAttributes<HTMLDivElement>}
 * @extends {VariantProps<typeof boxVariants>}
 *
 * @property {string} [width] - The width of the box.
 * @property {string} [height] - The height of the box.
 * @property {string} [color] - The text color of the box.
 * @property {string} [backgroundColor] - The background color of the box.
 * @property {string} [margin] - The margin around the box.
 * @property {string} [padding] - The padding inside the box.
 */
interface BoxProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof boxVariants> {
  width?: string;
  height?: string;
  color?: string;
  backgroundColor?: string;
  margin?: string;
  padding?: string;
}

export type { BoxProps };
