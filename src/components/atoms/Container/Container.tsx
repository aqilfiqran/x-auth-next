import { cn } from '@/utils/styles';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | false;
  disableGutters?: boolean;
}

const screens = {
  xs: 'max-w-screen-xs',
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
};

export function Container({ children, maxWidth = 'lg', disableGutters, className }: ContainerProps) {
  const maxWidthClass = maxWidth === 'full' || !maxWidth ? 'max-w-full' : screens[maxWidth];
  return <section className={cn('container', disableGutters && '!px-0', maxWidthClass, className)}>{children}</section>;
}
