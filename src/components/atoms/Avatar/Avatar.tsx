'use client';

import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cn } from '@/utils/styles';

export type AvatarRootProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;
type AvatarRootRef = React.ElementRef<typeof AvatarPrimitive.Root>;

const AvatarRoot = React.forwardRef<AvatarRootRef, AvatarRootProps>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex size-10 shrink-0 overflow-hidden rounded-full border-2 border-neutral-white',
      className
    )}
    {...props}
  />
));
AvatarRoot.displayName = AvatarPrimitive.Root.displayName;

export type AvatarImageProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>;
type AvatarImageRef = React.ElementRef<typeof AvatarPrimitive.Image>;

const AvatarImage = React.forwardRef<AvatarImageRef, AvatarImageProps>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image ref={ref} className={cn('aspect-square h-full w-full', className)} {...props} />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

export type AvatarFallbackProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>;
type AvatarFallbackRef = React.ElementRef<typeof AvatarPrimitive.Fallback>;

const AvatarFallback = React.forwardRef<AvatarFallbackRef, AvatarFallbackProps>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-primary text-b14 !text-neutral-white',
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export type AvatarProps = AvatarRootProps & {
  src?: string;
  alt?: string;
  isActive?: boolean;
  fallback?: React.ReactNode;
  classNameImage?: string;
  classNameFallback?: string;
};

const Avatar = React.forwardRef<AvatarRootRef, AvatarProps>(
  ({ src, alt = 'avatar', isActive, fallback, className, classNameImage, classNameFallback, ...props }, ref) => (
    <div className="relative inline-block">
      <AvatarRoot ref={ref} className={cn('relative', className)} {...props}>
        {src ?
          <AvatarImage src={src} alt={alt} className={cn(classNameImage)} />
        : <AvatarFallback className={cn('text-neutral-black', classNameFallback)}>{fallback}</AvatarFallback>}
      </AvatarRoot>
      {isActive && (
        <div className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-neutral-white bg-success" />
      )}
    </div>
  )
);
Avatar.displayName = AvatarRoot.displayName;

export { Avatar, AvatarRoot, AvatarImage, AvatarFallback };
