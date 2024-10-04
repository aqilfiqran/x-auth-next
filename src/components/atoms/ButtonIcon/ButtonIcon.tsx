import { Atoms } from '@/components/atoms';
import { ButtonProps } from '@/components/atoms/Button';
import { cn } from '@/utils/styles';
import React from 'react';

export type ButtonIconProps = Omit<ButtonProps, 'asChild'> & {
  children: React.ReactNode;
};

export function ButtonIcon({ className, ...props }: ButtonIconProps) {
  return (
    <Atoms.Button
      rounded
      className={cn('!bg-transparent p-2 !text-neutral-dark hover:!bg-neutral-semantic', className)}
      {...props}
    />
  );
}
