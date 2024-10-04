import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/styles';
import { Loader } from 'lucide-react';

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors',
    'disabled:cursor-not-allowed',
    'data-[variant=filled]:disabled:bg-neutral-semantic data-[variant=filled]:disabled:text-neutral-gray',
    'data-[variant=outlined]:disabled:border-neutral-gray data-[variant=outlined]:disabled:bg-transparent data-[variant=outlined]:disabled:text-neutral-gray',
    'data-[variant=ghost]:disabled:bg-transparent data-[variant=ghost]:disabled:text-neutral-gray',
    'data-[variant=soft]:disabled:bg-neutral-semantic data-[variant=soft]:disabled:text-neutral-gray',
  ],
  {
    variants: {
      size: {
        sm: 'rounded-[4px] px-2 py-2 !text-b12',
        md: 'rounded-md px-3 py-2.5 !text-b14',
        lg: 'rounded-md px-4 py-3 !text-b14',
      },
      color: {
        primary: [
          'data-[variant=filled]:bg-primary data-[variant=filled]:text-neutral-white data-[variant=filled]:hover:bg-primary-dark',
          'data-[variant=outlined]:border data-[variant=outlined]:border-primary data-[variant=outlined]:bg-transparent data-[variant=outlined]:text-primary data-[variant=outlined]:hover:bg-primary data-[variant=outlined]:hover:text-neutral-white',
          'data-[variant=ghost]:bg-transparent data-[variant=ghost]:text-primary data-[variant=ghost]:hover:bg-primary-semantic',
          'data-[variant=soft]:bg-primary-semantic data-[variant=soft]:text-primary data-[variant=soft]:hover:bg-primary data-[variant=soft]:hover:text-neutral-white',
        ],
        secondary: [
          'data-[variant=filled]:bg-neutral data-[variant=filled]:text-neutral-white data-[variant=filled]:hover:bg-neutral-dark',
          'data-[variant=outlined]:border data-[variant=outlined]:border-neutral data-[variant=outlined]:bg-transparent data-[variant=outlined]:text-neutral-dark data-[variant=outlined]:hover:bg-neutral data-[variant=outlined]:hover:text-neutral-white',
          'data-[variant=ghost]:bg-transparent data-[variant=ghost]:text-neutral-dark data-[variant=ghost]:hover:bg-neutral-semantic',
          'data-[variant=soft]:bg-neutral-semantic data-[variant=soft]:text-neutral data-[variant=soft]:hover:bg-neutral data-[variant=soft]:hover:text-neutral-white',
        ],
        danger: [
          'data-[variant=filled]:bg-danger data-[variant=filled]:text-neutral-white data-[variant=filled]:hover:bg-danger-dark',
          'data-[variant=outlined]:border data-[variant=outlined]:border-danger data-[variant=outlined]:bg-transparent data-[variant=outlined]:text-danger data-[variant=outlined]:hover:bg-danger data-[variant=outlined]:hover:text-neutral-white',
          'data-[variant=ghost]:bg-transparent data-[variant=ghost]:text-danger data-[variant=ghost]:hover:bg-danger-semantic',
          'data-[variant=soft]:bg-danger-semantic data-[variant=soft]:text-danger data-[variant=soft]:hover:bg-danger data-[variant=soft]:hover:text-neutral-white',
        ],
        warning: [
          'data-[variant=filled]:bg-warning data-[variant=filled]:text-neutral-white data-[variant=filled]:hover:bg-warning-dark',
          'data-[variant=outlined]:border data-[variant=outlined]:border-warning data-[variant=outlined]:bg-transparent data-[variant=outlined]:text-warning data-[variant=outlined]:hover:bg-warning data-[variant=outlined]:hover:text-neutral-white',
          'data-[variant=ghost]:bg-transparent data-[variant=ghost]:text-warning data-[variant=ghost]:hover:bg-warning-semantic',
          'data-[variant=soft]:bg-warning-semantic data-[variant=soft]:text-warning data-[variant=soft]:hover:bg-warning data-[variant=soft]:hover:text-neutral-white',
        ],
        success: [
          'data-[variant=filled]:bg-success data-[variant=filled]:text-neutral-white data-[variant=filled]:hover:bg-success-dark',
          'data-[variant=outlined]:border data-[variant=outlined]:border-success data-[variant=outlined]:bg-transparent data-[variant=outlined]:text-success data-[variant=outlined]:hover:bg-success data-[variant=outlined]:hover:text-neutral-white',
          'data-[variant=ghost]:bg-transparent data-[variant=ghost]:text-success data-[variant=ghost]:hover:bg-success-semantic',
          'data-[variant=soft]:bg-success-semantic data-[variant=soft]:text-success data-[variant=soft]:hover:bg-success data-[variant=soft]:hover:text-neutral-white',
        ],
        info: [
          'data-[variant=filled]:bg-info data-[variant=filled]:text-neutral-white data-[variant=filled]:hover:bg-info-dark',
          'data-[variant=outlined]:border data-[variant=outlined]:border-info data-[variant=outlined]:bg-transparent data-[variant=outlined]:text-info data-[variant=outlined]:hover:bg-info data-[variant=outlined]:hover:text-neutral-white',
          'data-[variant=ghost]:bg-transparent data-[variant=ghost]:text-info data-[variant=ghost]:hover:bg-info-semantic',
          'data-[variant=soft]:bg-info-semantic data-[variant=soft]:text-info data-[variant=soft]:hover:bg-info data-[variant=soft]:hover:text-neutral-white',
        ],
        light: [
          'data-[variant=filled]:bg-neutral-semantic data-[variant=filled]:text-neutral-black data-[variant=filled]:hover:bg-neutral-light',
          'data-[variant=outlined]:border data-[variant=outlined]:border-neutral-semantic data-[variant=outlined]:bg-transparent data-[variant=outlined]:text-neutral-semantic data-[variant=outlined]:hover:bg-neutral-semantic data-[variant=outlined]:hover:text-neutral-black',
          'data-[variant=ghost]:bg-transparent data-[variant=ghost]:text-neutral-semantic data-[variant=ghost]:hover:bg-transparent data-[variant=ghost]:hover:text-neutral-semantic',
          'data-[variant=soft]:bg-neutral-semantic data-[variant=soft]:text-neutral-white data-[variant=soft]:hover:bg-neutral-semantic data-[variant=soft]:hover:text-neutral-black',
        ],
        dark: [
          'data-[variant=filled]:bg-neutral-black data-[variant=filled]:text-neutral-white data-[variant=filled]:hover:bg-neutral-darker',
          'data-[variant=outlined]:border data-[variant=outlined]:border-neutral-black data-[variant=outlined]:bg-transparent data-[variant=outlined]:text-neutral-black data-[variant=outlined]:hover:bg-neutral-black data-[variant=outlined]:hover:text-neutral-white',
          'data-[variant=ghost]:bg-transparent data-[variant=ghost]:text-neutral-black data-[variant=ghost]:hover:bg-neutral-light',
          'data-[variant=soft]:bg-neutral-light data-[variant=soft]:text-neutral-black data-[variant=soft]:hover:bg-neutral-black data-[variant=soft]:hover:text-neutral-white',
        ],
      },
      rounded: {
        true: 'rounded-full',
        false: '',
      },
    },
    defaultVariants: {
      color: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost' | 'soft';
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'filled', size, rounded, color, asChild = false, loading, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        data-variant={variant}
        className={cn(buttonVariants({ size, color, rounded, className }))}
        ref={ref}
        {...props}
      >
        {loading ?
          <Loader className="animate-spin" />
        : children}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
