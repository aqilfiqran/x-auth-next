import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { GoogleTagManager } from '@next/third-parties/google';
import { getCookie } from 'cookies-next';
import './globals.css';
import { Atoms } from '@/components/atoms';
import { pageIndex } from '@/utils/robots';
import ReactQueryProvider from '@/libs/react-query';
import { Layouts } from '@/components/layouts';
import { THEMES, ThemeType } from '@/components/layouts/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Xapiens',
  description: 'challenge for Xapiens',
  robots: pageIndex(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme: ThemeType = getCookie('theme') ?? 'light';
  const gtmId = process.env.gtmId ?? '';

  return (
    <html lang="en" data-theme={theme} suppressHydrationWarning>
      <GoogleTagManager gtmId={gtmId} />
      <body className={inter.className}>
        <Layouts.ErrorBoundary>
          <Layouts.ThemeProvider
            attribute="class"
            themes={THEMES}
            defaultTheme={theme}
            enableSystem={false}
            disableTransitionOnChange
          >
            <ReactQueryProvider>{children}</ReactQueryProvider>
            <NextTopLoader color="#FF9330" shadow={false} showSpinner={false} />
            <Atoms.Toaster />
          </Layouts.ThemeProvider>
        </Layouts.ErrorBoundary>
      </body>
    </html>
  );
}
