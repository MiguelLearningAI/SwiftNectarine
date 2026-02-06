import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swift Nectarine - Beautiful Contact Management",
  description: "Discover new ways to keep track of your contacts with Swift Nectarine. Beautiful design, offline capability, and creative techniques for everyone on a budget.",
  keywords: ["contact management", "offline contact app", "budget-friendly", "Swift Nectarine"],
  authors: [{ name: "Swift Nectarine Team" }],
  openGraph: {
    title: "Swift Nectarine - Beautiful Contact Management",
    description: "Beautiful design meets powerful contact management. Accessible, affordable, and works offline.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swift Nectarine - Beautiful Contact Management",
    description: "Beautiful design meets powerful contact management. Accessible, affordable, and works offline.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
