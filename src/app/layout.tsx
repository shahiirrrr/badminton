import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MotionProvider } from "@/components/motion/Motion";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "[Academy name] — Badminton academy", template: "%s — [Academy name]" },
  description: "Badminton coaching for kids, juniors and adults. Better players, stronger minds, a healthier you.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body id="top" className="flex min-h-full flex-col font-sans">
        <SmoothScroll />
        <MotionProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
