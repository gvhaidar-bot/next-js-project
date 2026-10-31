import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
const raleWay = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "Hotel Booking",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const session = await auth();

  return (
    <html lang="en" className={`${raleWay.variable}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SessionProvider session={session}>
          <Navbar />
          <main className="bg-gray-50 min-h-screen">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
