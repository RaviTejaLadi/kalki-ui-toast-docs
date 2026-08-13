import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-center font-medium select-none align-middle transition-colors duration-150 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
        success: 'bg-success text-success-foreground hover:bg-success/90',
        danger: 'bg-danger text-danger-foreground hover:bg-danger/90',
        warning: 'bg-warning text-warning-foreground hover:bg-warning/90',
        info: 'bg-info text-info-foreground hover:bg-info/90',
        help: 'bg-help text-help-foreground hover:bg-help/90',
        light: 'bg-light text-light-foreground hover:bg-light/80',
        dark: 'bg-dark text-dark-foreground hover:bg-dark/90',
        outline: 'border border-border bg-background text-foreground hover:bg-muted',
        ghost: 'text-foreground hover:bg-muted',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        xs: 'h-7 px-2 text-xs',
        sm: 'h-8 px-3 text-sm',
        md: 'h-9 px-4 text-sm',
        lg: 'h-10 px-4 text-base',
        xl: 'h-11 px-6 text-lg',
        '2xl': 'h-12 px-6 text-xl',
        '3xl': 'h-13 px-7 text-2xl',
      },
      raised: {
        true: 'shadow-sm',
        false: '',
      },
      rounded: {
        true: 'rounded-full',
        false: 'rounded-md',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
      raised: false,
      rounded: false,
    },
  }
);
