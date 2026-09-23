import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
}

export const Container = ({ children, size = 'lg', className = '' }: ContainerProps) => {
  const sizeStyles = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    wide: 'max-w-7xl'
  } as Record<string, string>;
  
  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeStyles[size] ?? sizeStyles.lg} ${className}`}>
      {children}
    </div>
  );
};
