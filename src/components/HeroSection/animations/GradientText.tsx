import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  delay?: number;
}

export function GradientText({ children, delay = 0 }: GradientTextProps) {
  return (
    <span
      className="inline-block animate-reveal text-foreground"
      style={{
        animationDelay: `${delay}ms`,
        transform: 'translateY(20px)',
      }}
    >
      {children}
    </span>
  );
}
