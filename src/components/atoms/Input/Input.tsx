'use client';

import * as React from 'react';
import { InputMask, type MaskProps } from '@react-input/mask';
import { cn } from '@/utils/styles';

export interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputClassName?: string;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  error?: boolean;
  success?: boolean;
  variant?: 'default' | 'light';
}

const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  (
    {
      className,
      inputClassName,
      leftSection,
      rightSection,
      error = false,
      success = false,
      variant = 'default',
      ...props
    },
    ref
  ) => {
    const defaultSection = 'absolute top-0 flex h-full items-center justify-center';
    const errorSection = error && 'border-danger text-danger';
    return (
      <div className={cn('relative', className)}>
        {leftSection && <div className={cn('left-4', defaultSection, errorSection)}>{leftSection}</div>}

        <input
          className={cn(
            'bg-background file:text-sm flex w-full rounded-md border border-neutral-light px-4 py-3 !text-p14 text-neutral outline-none transition-all duration-200 file:border-0 file:bg-transparent file:font-medium placeholder:text-neutral focus:shadow disabled:cursor-not-allowed disabled:bg-neutral-semantic disabled:text-neutral-light placeholder:disabled:text-neutral-light',
            leftSection && 'pl-11',
            rightSection && 'pr-11',
            error && 'border-danger',
            success && 'border-success',
            variant === 'light' && 'bg-neutral-semantic',
            inputClassName
          )}
          ref={ref}
          {...props}
        />

        {rightSection && <div className={cn('right-4', defaultSection, errorSection)}>{rightSection}</div>}
      </div>
    );
  }
);
BaseInput.displayName = 'BaseInput';

export interface InputProps extends BaseInputProps, Pick<MaskProps, 'mask' | 'replacement'> {}

function Input({ mask, replacement, ...props }: InputProps) {
  if (!mask) return <BaseInput {...props} />;
  return <InputMask<typeof BaseInput> component={BaseInput} mask={mask} replacement={replacement} {...props} />;
}

export { Input };
