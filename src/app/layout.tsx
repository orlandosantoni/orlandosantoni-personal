import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/navbar";

export const metadata: Metadata = {
  title: "Orlando Santoni",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='antialiased'
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
