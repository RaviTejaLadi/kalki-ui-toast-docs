import React from 'react';

interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
}

export function TextReveal({ children, delay = 0 }: TextRevealProps) {
  return (
    <div
      className="animate-reveal overflow-hidden"
      style={{
        animationDelay: `${delay}ms`,
        opacity: 0,
        transform: 'translateY(20px)',
      }}
    >
      {children}
    </div>
  );
}
