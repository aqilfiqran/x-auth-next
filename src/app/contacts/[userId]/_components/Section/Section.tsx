'use client';
import { Atoms } from '@/components/atoms';
import { useUserDetail } from '@/services/api/user';
import { Loader } from 'lucide-react';
import { useParams } from 'next/navigation';

export function Section() {
  const { userId } = useParams<{ userId: string }>();

  const { data, isLoading } = useUserDetail({
    params: {
      id: userId,
    },
  });

  return (
    <Atoms.Container className="mx-6 flex w-full max-w-[600px] flex-col gap-8 overflow-hidden rounded-lg bg-neutral-white p-6 shadow-lg">
      <div className="flex flex-row items-center justify-between gap-2">
        <div className="flex flex-1 flex-col gap-1">
          <Atoms.Text variant="b16" as={'h1'}>
            Detail User
          </Atoms.Text>
          <Atoms.Text variant="p14" className="text-neutral-dark">
            Berikut adalah detail user yang tersedia. Data ini diambil dari API.
          </Atoms.Text>
        </div>
      </div>

      {isLoading && (
        <div className="flex h-[20vh] items-center justify-center">
          <Loader size={32} className="animate-spin" />
        </div>
      )}
      {data && (
        <div className="flex flex-col gap-4">
          <div className="flex justify-center">
            <Atoms.Avatar src={data.avatar} alt={data.id.toString()} className="h-24 w-24 rounded-full object-cover" />
          </div>
          <div className="flex flex-col items-center justify-center gap-0.5">
            <Atoms.Text variant="b18" as={'h1'}>
              {data.first_name} {data.last_name}
            </Atoms.Text>
            <Atoms.Text variant="p14" className="text-neutral-main">
              {data.email}
            </Atoms.Text>
          </div>
        </div>
      )}
    </Atoms.Container>
  );
}
