import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Umbrella Intelligence",
  description: "Project intelligence that makes the next decision smarter.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}