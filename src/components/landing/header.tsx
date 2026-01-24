"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/about", text: "About Us" },
    { href: "/services", text: "Services" },
    { href: "/solutions", text: "Solutions" },
  ];

  const allNavLinks = [...navLinks, { href: "/contact", text: "Contact" }];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container relative flex h-14 max-w-screen-xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
           <div className="flex items-center space-x-1 text-sm font-medium bg-secondary/70 p-1 rounded-lg">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={cn(
                  "px-3 py-1.5 rounded-md transition-colors",
                  pathname === link.href 
                    ? "bg-background text-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </nav>

        <div className="flex items-center gap-4">
            <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
              <Link href="/contact">
                Contact
              </Link>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader className="sr-only">
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-6">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    <Logo />
                  </Link>
                  <nav className="grid gap-2">
                    {allNavLinks.map((link) => (
                       <Link 
                         key={link.href} 
                         href={link.href} 
                         onClick={() => setIsOpen(false)} 
                         className={cn(
                          "px-3 py-2 rounded-md text-lg font-medium transition-colors",
                           pathname === link.href
                            ? "bg-secondary text-foreground"
                            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                        )}
                       >
                        {link.text}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
