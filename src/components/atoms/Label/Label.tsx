'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/styles';

const labelVariants = cva(
  'text-b14 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
);

export type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>;
type LabelRef = React.ElementRef<typeof LabelPrimitive.Root>;

const Label = React.forwardRef<LabelRef, LabelProps & VariantProps<typeof labelVariants>>(
  ({ className, ...props }, ref) => (
    <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
  )
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
