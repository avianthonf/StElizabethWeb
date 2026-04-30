import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "St. Elizabeth High School",
  description: "Horizontal homepage prototype for St. Elizabeth High School.",
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
