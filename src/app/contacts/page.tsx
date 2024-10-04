import { Suspense } from 'react';
import { Section } from './_components/Section';
import { Loader } from 'lucide-react';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-info-semantic p-4">
      <Suspense fallback={<Loader className="animate-spin" />}>
        <Section />
      </Suspense>
    </main>
  );
}
