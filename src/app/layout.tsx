import clsx from 'clsx';
import '@/styles/globals.scss';
import type { Metadata } from 'next';
import Providers from '@/components/Providers';
import getMetadata from '@/configs/site.config';
import { fontSans } from '@/configs/font.config';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('Trang chủ');
  return metadata;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={clsx('body', fontSans.className)}>
        <Providers>
          <div className="container">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
