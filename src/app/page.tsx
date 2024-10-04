import { Atoms } from '@/components/atoms';
import { Form } from './_components/Form';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-info-semantic p-4">
      <Atoms.Container className="flex w-full max-w-[500px] flex-col gap-4 rounded-lg bg-neutral-white p-6 shadow-lg">
        <Form />
      </Atoms.Container>
    </main>
  );
}
