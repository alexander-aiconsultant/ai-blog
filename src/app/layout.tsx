import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Insights — AI Research & Consulting Blog",
  description:
    "Insights on artificial intelligence, machine learning, and building intelligent systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <nav className="border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              AI Insights
            </Link>
            <div className="flex gap-6 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900">
                Blog
              </Link>
              <Link href="/about" className="hover:text-gray-900">
                About
              </Link>
            </div>
          </div>
        </nav>
        <div className="flex-1">{children}</div>
        <footer className="border-t border-gray-100 py-8">
          <div className="max-w-3xl mx-auto px-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} AI Insights. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
