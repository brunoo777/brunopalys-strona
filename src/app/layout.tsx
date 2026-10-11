import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Bruno Pałys - Montaż rolek dla firm · agencji marketingowych, meta ads",
  description:
    "Scenariusz, nagranie i montaż rolek dla firm. Od pomysłu do gotowego filmu — wszystko w jednych rękach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${anton.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
