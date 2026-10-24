import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/Footer";
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "[Nama Restoran]",
  description: "Website promosi [Nama Restoran] — menu unggulan, suasana, lokasi, dan jam buka.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable}  h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-cream text-ink">
        <Navbar />
        <main className="bg-cream min-h-screen">{children}</main>
        <Footer />
        <Link href="#kontak" aria-label="Reservasi" className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-primary-accent text-white shadow-[0_0_6px_rgba(0,0,0,0.24),0_8px_12px_rgba(0,0,0,0.14)] transition hover:bg-primary active:scale-95">
          <IoCallOutline className="size-6" />
        </Link>
      </body>
    </html>
  );
}
