import { useEffect, useState, forwardRef, useRef, useCallback } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import { ToastProps } from './types';
import { cn } from '@/lib/utils';

const toastVariants = cva(
  'relative mt-2 flex w-fit max-w-[calc(100vw-2rem)] items-center justify-between rounded-md px-1 transition-all duration-500',
  {
    variants: {
      variant: {
        default: 'border border-border bg-card text-card-foreground shadow-lg',
        primary: 'border border-primary/20 bg-primary/10 text-primary',
        secondary: 'border border-border bg-muted text-foreground',
        success: 'border border-success/20 bg-success/10 text-success',
        info: 'border border-info/20 bg-info/10 text-info',
        warning: 'border border-warning/20 bg-warning/10 text-warning',
        danger: 'border border-danger/20 bg-danger/10 text-danger',
        help: 'border border-help/20 bg-help/10 text-help',
        light: 'border border-border bg-light text-light-foreground',
        dark: 'border border-dark/40 bg-dark text-dark-foreground',
      },
      rounded: {
        true: 'rounded-lg',
        false: 'rounded-sm',
      },
      visible: {
        true: 'opacity-100 translate-y-0',
        false: 'opacity-0 translate-y-[-16px]',
      },
      hiding: {
        true: 'opacity-0 scale-95',
        false: 'scale-100',
      },
    },
    defaultVariants: {
      variant: 'default',
      rounded: false,
      visible: false,
      hiding: false,
    },
  }
);

export type ToastVariantProps = VariantProps<typeof toastVariants>;

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      variant = 'default',
      message,
      onClose,
      showClose,
      autoClose = 5000,
      icon,
      rounded,
      className = '',
      style,
      id,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHiding, setIsHiding] = useState(false);
    const remainingTimeRef = useRef<number>(typeof autoClose === 'number' ? autoClose : 0);
    const startTimeRef = useRef<number | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const startTimer = useCallback(() => {
      if (autoClose === false || remainingTimeRef.current <= 0) return;

      startTimeRef.current = Date.now();
      timeoutRef.current = setTimeout(() => {
        setIsHiding(true);
        setTimeout(onClose, 500);
      }, remainingTimeRef.current);
    }, [autoClose, onClose]);

    const pauseTimer = () => {
      if (timeoutRef.current && startTimeRef.current) {
        clearTimeout(timeoutRef.current);
        const elapsedTime = Date.now() - startTimeRef.current;
        remainingTimeRef.current = Math.max(0, remainingTimeRef.current - elapsedTime);
        startTimeRef.current = null;
      }
    };

    useEffect(() => {
      const showTimeout = setTimeout(() => setIsVisible(true), 100);
      startTimer();

      return () => {
        clearTimeout(showTimeout);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, [startTimer]);

    return (
      <div
        ref={ref}
        id={id.toString()}
        className={cn(
          toastVariants({
            variant,
            rounded,
            visible: isVisible,
            hiding: isHiding,
          }),
          className
        )}
        style={style}
        role="alert"
        onMouseEnter={pauseTimer}
        onMouseLeave={startTimer}
        {...props}
      >
        <div className="flex items-center gap-3 px-2 py-1 w-full min-w-0">
          {icon && <span className="flex-shrink-0 text-current">{icon}</span>}
          <div className="flex-1 text-xs font-medium break-words">{message}</div>
          {showClose && (
            <button
              onClick={onClose}
              className="flex-shrink-0 p-1.5 bg-inherit transition-colors ml-2"
              aria-label="Close"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    );
  }
);

Toast.displayName = 'Toast';
