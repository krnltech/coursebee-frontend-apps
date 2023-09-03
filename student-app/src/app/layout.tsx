import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CourseBee - Student",
  description: "Student module of coursebee platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
