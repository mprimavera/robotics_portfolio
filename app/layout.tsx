import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import { NavbarMenu } from "./components/navbarmenu";
import { StickyBanner } from "@/components/ui/sticky-banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michael Primavera",
  description: "Startup robotics compnay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative dark">
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
      {/* Under Development Banner */}
      {/* <StickyBanner>
        <p className="mx-0 max-w-[90%] text-pink-200 drop-shadow-md backdrop-blur-sm">
          This portfolio is currently being developed. Expect updates to be completed by 12/31/2025...{" "}
        </p>
      </StickyBanner> */}

        <NavbarMenu />

        {/* Main content grows */}
        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
