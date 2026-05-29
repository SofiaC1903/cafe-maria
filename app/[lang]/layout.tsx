import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Cafe Niña María Web Page",
  description: "Next App to display Cafe Niña María's Web Page",
};

export async function generateStaticParams(){
    return [{lang: "en-US"},{lang:"es"}];
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<'/[lang]'>) {
  return (
    <html lang={(await params).lang}>
      <body>
        {children}
      </body>
    </html>
  );
}
