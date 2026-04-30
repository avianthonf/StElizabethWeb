import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "St. Elizabeth Walker Prototype",
  description: "Walker-inspired horizontal homepage prototype for St. Elizabeth High School.",
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
