import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import { Playfair_Display, Crimson_Pro } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
});

const crimson = Crimson_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-crimson',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Orlando Santoni",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${crimson.variable}`}>
      <body className='antialiased'>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
