'use client';

import { ElementType, forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/utils/styles';

export const variants = cva('text-neutral-black', {
  variants: {
    variant: {
      h1: '!text-h1',
      h2: '!text-h2',
      h3: '!text-h3',
      h4: '!text-h4',
      h5: '!text-h5',
      h6: '!text-h6',
      h7: '!text-h7',
      h8: '!text-h8',
      b18: '!text-b18',
      b16: '!text-b16',
      b14: '!text-b14',
      b12: '!text-b12',
      b10: '!text-b10',
      b8: '!text-b8',
      p16: '!text-p16',
      p14: '!text-p14',
      p12: '!text-p12',
      p10: '!text-p10',
      p8: '!text-p8',
      l16: '!text-l16',
      l14: '!text-l14',
      l12: '!text-l12',
      l10: '!text-l10',
      l8: '!text-l8',
    },
  },
  defaultVariants: {
    variant: 'p14',
  },
});

const elementMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  h7: 'h7',
  h8: 'h8',
  b18: 'p',
  b16: 'p',
  b14: 'p',
  b12: 'p',
  b10: 'p',
  b8: 'p',
  p16: 'p',
  p14: 'p',
  p12: 'p',
  p10: 'p',
  p8: 'p',
  l16: 'span',
  l14: 'span',
  l12: 'span',
  l10: 'span',
  l8: 'span',
};

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
  as?: ElementType;
  variant?: keyof typeof elementMapping;
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant = 'p16', asChild = false, as, ...props }, ref) => {
    const element = as ?? elementMapping[variant];
    const Component = asChild ? Slot : element;

    return <Component ref={ref} className={cn(variants({ variant, className }))} {...props} />;
  }
);

Text.displayName = 'Text';
