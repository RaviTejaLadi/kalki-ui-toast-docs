import React, { useState, useEffect, ReactNode, CSSProperties, useCallback, useRef } from 'react';
import { cva } from 'class-variance-authority';
import Box, { BoxProps } from '../Box';
import { cn } from '@/lib/utils';

interface TabProps extends BoxProps {
  label: string;
  value: string;
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
  className?: string;
}

interface TabsProps {
  children: React.ReactNode;
  active?: string;
  onChange?: (value: string) => void;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'help' | 'info' | 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  headerStyles?: CSSProperties;
  bodyStyles?: CSSProperties;
  className?: string;
  style?: CSSProperties;
  title?: string;
}

const tabButtonStyles = cva(
  'relative mr-1 flex items-center justify-center rounded-md font-medium transition-colors duration-150 ease-in-out group',
  {
    variants: {
      variant: {
        primary: 'text-muted-foreground hover:bg-muted hover:text-foreground',
        secondary: 'text-muted-foreground hover:bg-background/80 hover:text-foreground',
        success: 'text-success hover:bg-success/10',
        danger: 'text-danger hover:bg-danger/10',
        warning: 'text-warning hover:bg-warning/10',
        help: 'text-help hover:bg-help/10',
        info: 'text-info hover:bg-info/10',
        dark: 'text-muted-foreground hover:bg-muted hover:text-foreground',
        light: 'text-muted-foreground hover:bg-muted hover:text-foreground',
      },
      size: {
        sm: 'space-x-2 px-3 py-1.5 text-xs',
        md: 'space-x-3 px-3.5 py-2 text-sm',
        lg: 'space-x-4 px-4 py-2.5 text-sm',
      },
      active: {
        true: 'bg-background font-semibold text-foreground shadow-sm',
        false: 'font-medium',
      },
      disabled: {
        true: 'pointer-events-none cursor-not-allowed opacity-40',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
    },
  }
);

export const Tabs: React.FC<TabsProps> = ({
  children,
  active,
  onChange,
  variant = 'primary',
  size = 'sm',
  headerStyles,
  bodyStyles,
  className,
  style,
}) => {
  const isTabElement = (child: React.ReactNode): child is React.ReactElement<TabProps> => {
    return React.isValidElement(child) && 'value' in child.props;
  };

  const getInitialActiveTab = () => {
    const firstEnabledTab = React.Children.toArray(children).find(
      (child) => isTabElement(child) && !child.props.disabled
    );
    return active || (isTabElement(firstEnabledTab) ? firstEnabledTab.props.value : undefined);
  };

  const [activeTab, setActiveTab] = useState(getInitialActiveTab);
  const tabsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (active !== undefined) {
      setActiveTab(active);
    }
  }, [active]);

  const handleTabClick = useCallback(
    (value: string) => {
      setActiveTab(value);
      if (onChange) {
        onChange(value);
      }
    },
    [onChange]
  );

  const getEnabledTabs = useCallback(() => {
    return React.Children.toArray(children).filter(
      (child): child is React.ReactElement<TabProps> => isTabElement(child) && !child.props.disabled
    );
  }, [children]);

  const handleKeyNavigation = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const enabledTabs = getEnabledTabs();
      const currentIndex = enabledTabs.findIndex(
        (child: React.ReactElement<TabProps>) => child.props.value === activeTab
      );

      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        let newIndex;

        if (e.key === 'ArrowRight') {
          newIndex = currentIndex + 1 >= enabledTabs.length ? 0 : currentIndex + 1;
        } else {
          newIndex = currentIndex - 1 < 0 ? enabledTabs.length - 1 : currentIndex - 1;
        }

        const newTab = enabledTabs[newIndex] as React.ReactElement<TabProps>;
        handleTabClick(newTab.props.value);

        // Focus the newly selected tab button
        const tabButtons = tabsRef.current?.querySelectorAll('button[role="tab"]');
        (tabButtons?.item(newIndex) as HTMLElement)?.focus();
      }
    },
    [activeTab, getEnabledTabs, handleTabClick]
  );

  return (
    <Box padding="0" rounded className={cn('docs-card rounded-xl p-4 sm:p-5', className)} style={style}>
      <div
        ref={tabsRef}
        role="tablist"
        aria-orientation="horizontal"
        className="mb-3 flex items-center overflow-x-auto rounded-md border border-border bg-muted/50 p-1"
        style={headerStyles}
        onKeyDown={handleKeyNavigation}
      >
        {React.Children.map(children, (child: React.ReactNode) => {
          if (!isTabElement(child)) return null;
          const isActive = child.props.value === activeTab;
          return (
            <button
              key={child.props.value}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${child.props.value}`}
              tabIndex={isActive ? 0 : -1}
              className={cn(
                tabButtonStyles({
                  variant,
                  size,
                  active: child.props.value === activeTab,
                  disabled: child.props.disabled,
                }),
                'group'
              )}
              onClick={() => !child.props.disabled && handleTabClick(child.props.value)}
              disabled={child.props.disabled}
              title={child.props.label}
            >
              {child.props.leftIcon && (
                <span className="opacity-70 group-hover:opacity-100 transition-opacity">{child.props.leftIcon}</span>
              )}
              <span className="flex-1 text-center">{child.props.label}</span>
              {child.props.rightIcon && (
                <span className="opacity-70 group-hover:opacity-100 transition-opacity">{child.props.rightIcon}</span>
              )}
            </button>
          );
        })}
      </div>
      <div
        className="flex items-center overflow-y-auto rounded-md border border-border/80 bg-background"
        style={bodyStyles}
      >
        {React.Children.toArray(children).map((child) => {
          if (!isTabElement(child)) return null;
          return (
            <div
              key={child.props.value}
              role="tabpanel"
              id={`tabpanel-${child.props.value}`}
              aria-labelledby={`tab-${child.props.value}`}
              hidden={child.props.value !== activeTab}
              className={cn('p-2 animate-fade-in w-full', child.props.className)}
            >
              {child.props.children}
            </div>
          );
        })}
      </div>
    </Box>
  );
};

export const Tab: React.FC<TabProps> = ({ children, className }) => (
  <div className={cn('p-2 animate-fade-in w-full', className)}>{children}</div>
);
