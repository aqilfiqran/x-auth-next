'use client';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Atoms } from '@/components/atoms';
import { FormTextInput } from '@/components/molecules';
import { Form as DefaultForm, FormPasswordInput } from '@/components/molecules/Form';
import { toast } from 'sonner';
import { useLogin } from '@/services/api/auth';
import { JsonType } from '@/types/common';
import { useAuthActions } from '@/services/store/auth';
import { useRouter } from 'next/navigation';

const schema = Yup.object().shape({
  email: Yup.string().required('Email wajib diisi').email('Email tidak valid'),
  password: Yup.string().required('Password wajib diisi'),
});

export function Form() {
  const form = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isValid, isDirty },
  } = form;

  const router = useRouter();
  const { setToken } = useAuthActions();
  const { mutate, isLoading } = useLogin();

  const onSubmit = handleSubmit(data => {
    mutate(
      {
        body: data,
      },
      {
        onSuccess: async response => {
          const token = response?.data?.token;

          await setToken(token);

          router.push('/contacts');
        },
        onError: (error: JsonType) => {
          const message = error?.response?.data?.error || 'Gagal masuk';
          toast.error(message);
        },
      }
    );
  });

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col items-center gap-1">
        <Atoms.Text variant="h3" as="h1" className="text-center text-primary-main">
          Masuk
        </Atoms.Text>
        <Atoms.Text variant="p14" as={'h2'} className="text-center text-neutral-dark">
          Masuk ke akun anda untuk melanjutkan ke aplikasi
        </Atoms.Text>
      </div>
      <DefaultForm {...form}>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <FormTextInput
            control={control}
            name="email"
            label="Email"
            placeholder="Contoh: test@mail.com"
            variant="light"
            required
            type="email"
          />

          <FormPasswordInput
            control={control}
            name="password"
            label="Password"
            placeholder="Masukkan password anda"
            variant="light"
            required
          />

          <hr className="border-neutral-semantic" />
          <Atoms.Button type="submit" disabled={!isValid || !isDirty} className={'w-full'} loading={isLoading}>
            Masuk
          </Atoms.Button>
        </form>
      </DefaultForm>
    </div>
  );
}
