import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Cafe Niña María Web Page",
  description: "Next App to display Cafe Niña María's Web Page",
};

export async function generateStaticParams(){
    return [{lang: "en-US"},{lang:"es-419"}];
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string};
}>) {
  return (
    <html lang={(params).lang}>
      <body>
        {children}
      </body>
    </html>
  );
}
