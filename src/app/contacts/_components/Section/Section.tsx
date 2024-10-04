'use client';

import { Atoms } from '@/components/atoms';
import { Pagination } from '@/components/molecules';
import { useUserList } from '@/services/api/user';
import { useAuthActions } from '@/services/store/auth';
import { Loader } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useMemo } from 'react';

export function Section() {
  const searchParams = useSearchParams();
  const page = useMemo(() => parseInt(searchParams.get('page') || '1', 10), [searchParams]);
  const perPage = 10;

  const options = useMemo(
    () => ({
      query: {
        page,
        per_page: perPage,
      },
    }),
    [page]
  );

  const { data, isLoading } = useUserList(options);
  const router = useRouter();
  const { clearToken } = useAuthActions();

  const onLogout = async () => {
    await clearToken();

    router.push('/');
  };

  return (
    <Suspense fallback={<Loader className="animate-spin" />}>
      <Atoms.Container className="mx-6 flex w-full max-w-[900px] flex-col gap-4 overflow-hidden rounded-lg bg-neutral-white p-6 shadow-lg">
        <div className="flex flex-row items-center justify-between gap-2">
          <div className="flex flex-1 flex-col gap-1">
            <Atoms.Text variant="b16" as={'h1'}>
              Data User
            </Atoms.Text>
            <Atoms.Text variant="p14" className="text-neutral-dark">
              Berikut adalah data user yang tersedia. Data ini diambil dari API. Klik nama user untuk melihat detail.
            </Atoms.Text>
          </div>
          <Atoms.Button variant="outlined" className="h-8 w-[100px]" color={'danger'} size="sm" onClick={onLogout}>
            Keluar
          </Atoms.Button>
        </div>

        <Pagination current={page} total={data?.total || 0} href="/contacts" perPage={perPage}>
          <table className="w-full table-auto overflow-scroll">
            <thead>
              <tr>
                <th className="w-10 border border-neutral-dark p-2">ID</th>
                <th className="w-20 border border-neutral-dark p-2">Profil</th>
                <th className="border border-neutral-dark p-2">Nama</th>
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <tr>
                  <td colSpan={3} className="border border-neutral-dark p-2 text-center">
                    <div className="flex h-[60vh] items-center justify-center">
                      <Loader className="animate-spin" />
                    </div>
                  </td>
                </tr>
              )}
              {data?.data?.map(user => (
                <tr key={user.id}>
                  <td className="border border-neutral-dark p-2 text-center">{user.id}</td>
                  <td className="border border-neutral-dark p-2 text-center">
                    <Atoms.Avatar src={user.avatar} alt={user.first_name} className="self-center" />
                  </td>
                  <td className="border border-neutral-dark p-2">
                    <Link href={`/contacts/${user.id}`} target="_blank">
                      <Atoms.Text variant="p14" className="transition-all duration-100 hover:text-primary-main">
                        {user.first_name} {user.last_name}
                      </Atoms.Text>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Pagination>
      </Atoms.Container>
    </Suspense>
  );
}
