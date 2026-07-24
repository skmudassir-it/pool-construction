import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: {
    default: "CrystalBlue Pool Builders — Custom Pool Design & Construction",
    template: "%s | CrystalBlue Pool Builders",
  },
  description: "Expert custom pool design, construction, and renovation services in Florida. Transform your backyard into a luxury resort-style oasis with CrystalBlue Pool Builders.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
