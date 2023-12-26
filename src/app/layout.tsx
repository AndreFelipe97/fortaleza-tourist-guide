import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/_layout/header";
import { Footer } from "@/components/_layout/footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Guia turístico de Fortaleza",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.className} bg-slate-950 flex justify-between flex-col min-h-screen p-0 box-border`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
