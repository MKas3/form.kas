'use client';

import React, { forwardRef } from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

export type LinkProps = React.ComponentPropsWithoutRef<typeof NextLink> & {
  underline?: boolean;
};

const Link = forwardRef<React.ElementRef<typeof NextLink>, LinkProps>(
  ({ underline, className, href, ...props }, ref) => {
    const pathname = usePathname();

    return (
      <NextLink
        ref={ref}
        className={cn(
          'whitespace-nowrap text-[0.9em] underline-offset-4 ring-offset-background transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[active=true]:text-foreground',
          underline && 'underline',
          className
        )}
        href={href}
        data-active={pathname === href.toString()}
        {...props}
      />
    );
  }
);
Link.displayName = 'Link';

export { Link };
