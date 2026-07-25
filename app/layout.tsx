import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Elementz — Get Plugged In",
  description: "The Elementz animated highway presentation",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

