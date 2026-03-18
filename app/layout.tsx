import type {Metadata} from 'next';
import { Inter, Outfit, Hind_Siliguri } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
});

const hindSiliguri = Hind_Siliguri({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['bengali', 'latin'],
  variable: '--font-bangla',
});

export const metadata: Metadata = {
  title: 'CommerceLab | ই-কমার্স এক্সিলারেশন প্ল্যাটফর্ম',
  description: 'বাংলাদেশে ই-কমার্স ফাউন্ডারদের ব্র্যান্ড তৈরি এবং স্কেল করার জন্য প্রয়োজনীয় সবকিছু এক জায়গায়।',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="bn" className={`${inter.variable} ${outfit.variable} ${hindSiliguri.variable}`}>
      <body suppressHydrationWarning className="font-bangla antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
