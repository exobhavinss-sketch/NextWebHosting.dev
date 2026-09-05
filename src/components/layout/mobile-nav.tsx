"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { InstagramIcon } from "@/components/shared/brand-icons";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { mainNavItems } from "@/data/navigation";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col p-6">
        <SheetHeader className="text-left mb-8">
          <SheetTitle>
            <Link href="/" onClick={() => onOpenChange(false)} className="inline-block">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-sky-400">
                NextWebHosting
              </span>
            </Link>
          </SheetTitle>
        </SheetHeader>

        <nav className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-4">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => onOpenChange(false)}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    isActive ? "text-primary" : "text-foreground/80"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="mt-auto pt-8 border-t border-border flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors"
              aria-label="Follow us on X (Twitter)"
            >
              <XIcon className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors"
              aria-label="Follow us on Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} NextWebHosting. All rights reserved.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
