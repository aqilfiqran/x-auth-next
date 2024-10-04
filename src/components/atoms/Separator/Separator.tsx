'use client';

import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cn } from '@/utils/styles';

export type SeparatorProps = React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>;
type SeparatorRef = React.ElementRef<typeof SeparatorPrimitive.Root>;

const Separator = React.forwardRef<SeparatorRef, SeparatorProps>(
  ({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 border-neutral',
        orientation === 'horizontal' ? 'w-full border-t' : 'h-full border-r',
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
