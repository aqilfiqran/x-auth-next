import { Toaster as Sonner } from 'sonner';
import { CheckCircle2, Info, XCircle } from 'lucide-react';

type ToasterProps = React.ComponentProps<typeof Sonner>;

export function Toaster({ ...props }: ToasterProps) {
  return (
    <Sonner
      position="top-right"
      icons={{
        success: <CheckCircle2 className="size-5" />,
        error: <XCircle className="size-5" />,
        warning: <Info className="size-5" />,
        info: <Info className="size-5" />,
      }}
      toastOptions={{
        className: 'py-2 px-4 rounded-xl items-start gap-3',
        classNames: {
          icon: 'size-4 text-neutral-white mt-1.5',
          title: 'text-b16 text-neutral-white',
          description: 'text-p12 text-neutral-white',
          success: 'bg-success',
          error: 'bg-danger',
          warning: 'bg-warning',
          info: 'bg-info',
        },
      }}
      {...props}
    />
  );
}
