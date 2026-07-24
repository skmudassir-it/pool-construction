"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSwimmingPool, faBars, faPhone, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass-nav">
      <div className="bg-gradient-to-r from-blue-700 via-sky-600 to-amber-500 text-white overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-1.5 text-xs font-semibold tracking-wide">
          <span className="inline-block px-8">💧 Free Design Consultation — Call {siteConfig.phone}</span>
          <span className="inline-block px-8">💧 Free Design Consultation — Call {siteConfig.phone}</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <FontAwesomeIcon icon={faSwimmingPool} className="size-5 text-secondary" />
            <span>CrystalBlue</span>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="inline-flex">
              <Button size="sm" className="gap-2">
                <FontAwesomeIcon icon={faPhone} className="size-3" />
                Free Estimate
              </Button>
            </Link>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden">
              <Button variant="ghost" size="icon">
                <FontAwesomeIcon icon={faBars} className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 pt-12">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                ))}
                <Link href="/contact" className="inline-flex mt-4" onClick={() => setOpen(false)}>
                  <Button className="w-full gap-2">
                    <FontAwesomeIcon icon={faPhone} className="size-3" />
                    Free Estimate
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

    </nav>
  );
}
