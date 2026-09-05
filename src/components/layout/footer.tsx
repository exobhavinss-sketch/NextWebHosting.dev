"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { InstagramIcon, XTwitterIcon } from "@/components/shared/brand-icons";
import { Button } from "@/components/ui/button";
import { footerNavItems } from "@/data/navigation";
import { siteConfig } from "@/lib/constants";


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0A0F1C] border-t border-white/5 text-slate-300 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950/20 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image src="/logo.png" alt="NextWebHosting Logo" width={32} height={32} className="rounded-lg" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-400">
                NextWebHosting
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>

            {/* Newsletter */}
            <div className="space-y-3 mt-2">
              <h4 className="text-sm font-semibold text-white">
                Subscribe to Our Newsletter
              </h4>
              <form
                className="flex max-w-sm gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  aria-label="Email address for newsletter"
                  className="flex h-10 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white shrink-0"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Services links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerNavItems.services.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerNavItems.company.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
            </ul>

            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mt-8 mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerNavItems.legal.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} NextWebHosting. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              aria-label="Follow us on X (Twitter)"
            >
              <XTwitterIcon className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              aria-label="Follow us on Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
