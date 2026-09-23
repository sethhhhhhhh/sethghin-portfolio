import React from 'react';
import Link from 'next/link';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'inline';
  size?: 'sm' | 'md' | 'lg';
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export const CustomLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ variant = 'primary', size = 'md', href, children, external = false, className = '', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
    
    const variantStyles = {
      primary: 'text-foreground hover:text-accent focus-visible:ring-accent',
      secondary: 'text-muted-foreground hover:text-foreground focus-visible:ring-accent',
      ghost: 'text-foreground hover:bg-white-soft focus-visible:ring-accent',
      inline: 'text-accent hover:text-accent-hover underline underline-offset-4 focus-visible:ring-accent'
    };
    
    const sizeStyles = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    };
    
    const linkProps = external 
      ? { target: '_blank', rel: 'noopener noreferrer' } 
      : {};
    
    if (external || href.startsWith('http')) {
      return (
        <a
          ref={ref}
          href={href}
          className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
          {...linkProps}
          {...props}
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link
        ref={ref}
        href={href}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

CustomLink.displayName = 'CustomLink';
