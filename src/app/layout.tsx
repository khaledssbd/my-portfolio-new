import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';
import { Toaster } from 'sonner';
import { mainLayoutMetadata } from '@/utils/Metadata';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = mainLayoutMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${poppins.variable} font-poppins antialiased`}
      >
        <Toaster
          //   richColors
          //   position="top-center"
          toastOptions={{
            style: {
              background: '#2ecc71',
              border: 'none',
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
