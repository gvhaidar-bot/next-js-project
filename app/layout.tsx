import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/Footer";
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "Hotel Booking",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable}  h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-cream text-ink">
        <Navbar />
        <main className="bg-cream min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
