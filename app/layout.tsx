import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Meow Creative Haus | AI-Driven Revenue Engineering",
  description:
    "We engineer AI-driven B2B & B2C acquisition systems that turn strangers into booked calls and locked Annual Recurring Revenue.",
  openGraph: {
    title: "Meow Creative Haus | AI-Driven Revenue Engineering",
    description:
      "We engineer AI-driven acquisition systems. Predictable growth. Zero BS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-surface text-text">
        <LenisProvider>
          <div className="grain-overlay" />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
