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
  title: "Alexander AI Consulting — Enterprise AI Strategy & Solutions",
  description:
    "Premier AI consultancy specializing in multi-modal machine learning, generative AI, and enterprise AI transformation. Founded by a Marie Curie Fellow with experience at Google, Amazon, and Microsoft Research.",
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
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <nav className="border-b border-[var(--border)]">
          <div className="max-w-5xl mx-auto px-6 py-5 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold tracking-tight">
              Alexander AI
            </Link>
            <div className="flex gap-8 text-sm text-[var(--muted)]">
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/founder" className="hover:text-white transition-colors">
                Founder
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </nav>
        <div className="flex-1">{children}</div>
        <footer className="border-t border-[var(--border)] py-8">
          <div className="max-w-5xl mx-auto px-6 text-center text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Alexander AI Consulting. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
