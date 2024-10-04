'use client';

import { Atoms } from '@/components/atoms';
import { InputProps } from '@/components/atoms/Input';
import { Eye, EyeOff } from 'lucide-react';
import { HTMLAttributes, ReactNode, useState } from 'react';
import { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './Form';
import { ButtonIcon } from '@/components/atoms/ButtonIcon';
import { cn } from '@/utils/styles';

interface FormPasswordInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<InputProps, 'name' | 'defaultValue' | 'mask' | 'replacement'>,
    Omit<ControllerProps<TFieldValues, TName>, 'render'> {
  label?: ReactNode;
  rightLabel?: ReactNode;
  helper?: ReactNode;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  required?: boolean;
  optional?: boolean;
}

export function FormPasswordInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  label,
  helper,
  containerProps,
  rightLabel,
  required = false,
  optional = false,
  ...props
}: FormPasswordInputProps<TFieldValues, TName>) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPassword ? 'text' : 'password';

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        const isError = Boolean(error?.message);

        return (
          <FormItem {...containerProps}>
            {label && (
              <div className={cn('flex flex-row items-center', props.disabled && 'text-neutral-gray')}>
                <FormLabel required={required} optional={optional}>
                  {label}
                </FormLabel>
                {rightLabel}
              </div>
            )}

            <FormControl>
              <Atoms.Input
                type={inputType}
                error={isError}
                rightSection={
                  <ButtonIcon
                    className={cn('p-1', props.disabled && '!text-neutral-light')}
                    // not trigger in enter
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ?
                      <EyeOff size={20} />
                    : <Eye size={20} />}
                  </ButtonIcon>
                }
                {...props}
                {...field}
              />
            </FormControl>

            <FormMessage />

            {!!helper && <FormDescription>{helper}</FormDescription>}
          </FormItem>
        );
      }}
    />
  );
}
