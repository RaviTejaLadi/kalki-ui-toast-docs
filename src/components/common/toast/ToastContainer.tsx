import { cva } from 'class-variance-authority';
import { Toast } from './Toast';
import { ToastContainerProps } from './types';
import { useToast } from './ToastContext';
import { cn } from '@/lib/utils';

const containerVariants = cva(
  'fixed z-50 flex flex-col gap-3 pointer-events-none max-w-[100vw] max-h-[100vh] overflow-hidden',
  {
    variants: {
      position: {
        'top-right': 'right-4 top-16',
        'top-center': 'left-1/2 top-16 -translate-x-1/2',
        'top-left': 'left-4 top-16',
        'bottom-right': 'bottom-4 right-4',
        'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
        'bottom-left': 'bottom-4 left-4',
      },
    },
    defaultVariants: {
      position: 'bottom-right',
    },
  }
);

export function ToastContainer({
  position = 'bottom-right',
  showClose = false,
  rounded = false,
  className = '',
  style,
}: ToastContainerProps) {
  const { toasts } = useToast();

  return (
    <div className={cn(containerVariants({ position }), className)} style={style}>
      <div className="flex flex-col gap-3 items-center w-[20rem] max-w-[calc(100vw-2rem)]">
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <Toast {...toast} showClose={showClose} rounded={rounded} />
          </div>
        ))}
      </div>
    </div>
  );
}
