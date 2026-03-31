import type { Metadata } from "next";
import { fonts } from "./fonts";
import "./globals.css";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Zaeux — Finance. Rebuilt. Owned by you.",
  description:
    "Zaeux is the onchain financial layer for people, businesses, and institutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={fonts.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
