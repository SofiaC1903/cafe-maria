import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Cafe Niña María Web Page",
  description: "Next App to display Cafe Niña María's Web Page",
};

export async function generateStaticParams(){
    return [{lang: "en-US"},{lang:"es-419"}];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string};
}>) {
  return (
    <html lang={(await params).lang}>
      <body>
        {children}
      </body>
    </html>
  );
}
