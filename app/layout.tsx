import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
