import { Atoms } from '@/components/atoms';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './Form';
import { InputProps } from '@/components/atoms/Input';
import { HTMLAttributes, ReactNode } from 'react';
import { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';

interface FormTextInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<InputProps, 'name' | 'defaultValue'>,
    Omit<ControllerProps<TFieldValues, TName>, 'render'> {
  label?: ReactNode;
  rightLabel?: ReactNode;
  helper?: ReactNode;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  required?: boolean;
  optional?: boolean;
}

export function FormTextInput<
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
  mask,
  replacement,
  ...props
}: FormTextInputProps<TFieldValues, TName>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        const isError = Boolean(error?.message);

        return (
          <FormItem {...containerProps}>
            {label && (
              <div className="flex flex-row items-center">
                <FormLabel required={required} optional={optional}>
                  {label}
                </FormLabel>
                {rightLabel}
              </div>
            )}

            <FormControl>
              <Atoms.Input error={isError} mask={mask} replacement={replacement} {...props} {...field} />
            </FormControl>

            <FormMessage />

            {!!helper && <FormDescription>{helper}</FormDescription>}
          </FormItem>
        );
      }}
    />
  );
}
