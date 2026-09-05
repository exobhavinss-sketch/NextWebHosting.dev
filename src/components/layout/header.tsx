"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu } from "lucide-react";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { mainNavItems } from "@/data/navigation";
import { siteConfig } from "@/lib/constants";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-50 shrink-0">
            <Image src="/logo.png" alt="NextWebHosting Logo" width={32} height={32} className="rounded-lg w-7 h-7 sm:w-8 sm:h-8 shrink-0" />
            <span className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-sky-400 hidden min-[380px]:block">
              NextWebHosting
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.title}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-blue-600"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="scale-90 sm:scale-100 flex items-center shrink-0">
              <ThemeToggle />
            </div>
            <Button asChild size="sm" className="h-8 text-xs px-3 sm:h-10 sm:text-sm sm:px-4 shrink-0">
              <Link href="/contact">Get Started</Link>
            </Button>
            <button
              className="lg:hidden p-1 sm:p-2 -mr-2 text-foreground/80 hover:text-foreground transition-colors shrink-0"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileNav open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} />
    </>
  );
}
