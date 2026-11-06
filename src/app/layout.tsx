import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Study in Lithuania 2027 | Go Abroad BD Research Desk",
    template: "%s | Go Abroad BD",
  },
  description: "Source-linked Lithuania university admissions research for students applying from Bangladesh. Compare 2027 deadlines, fees, English tests, programmes and OMPT rules.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}<SiteFooter /></body>
    </html>
  );
}
