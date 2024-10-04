import { Atoms } from '@/components/atoms';
import { cn } from '@/utils/styles';

export interface PaginationProps {
  current: number;
  total: number;
  perPage?: number;
  children: React.ReactNode;
  href: string;
  showAll?: number;
  className?: string;
}

export function Pagination({ current, total, perPage = 10, children, href, showAll = 5, className }: PaginationProps) {
  const totalPage = Math.ceil(total / perPage);
  const startPage = Math.max(1, current - Math.floor(showAll / 2));
  const endPage = Math.min(totalPage, startPage + showAll - 1);

  return (
    <div className={cn('flex flex-col items-center justify-center gap-4', className)}>
      {children}
      <div className="flex items-center justify-center gap-4">
        <Atoms.Button
          disabled={current === 1}
          variant="ghost"
          size={'sm'}
          onClick={() => {
            if (current > 1) {
              window.location.href = `${href}?page=${current - 1}`;
            }
          }}
        >
          Sebelumnya
        </Atoms.Button>
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => index + startPage).map(page => (
          <Atoms.Button
            key={page}
            onClick={() => {
              window.location.href = `${href}?page=${page}`;
            }}
            size={'sm'}
            className={cn('!h-8 !w-8')}
            variant={page === current ? 'filled' : 'ghost'}
          >
            {page}
          </Atoms.Button>
        ))}
        <Atoms.Button
          disabled={current === totalPage}
          variant="ghost"
          size={'sm'}
          onClick={() => {
            if (current < totalPage) {
              window.location.href = `${href}?page=${current + 1}`;
            }
          }}
        >
          Selanjutnya
        </Atoms.Button>
      </div>
    </div>
  );
}
