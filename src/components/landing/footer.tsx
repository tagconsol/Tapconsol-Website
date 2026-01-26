import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Logo />
            <p className="mt-4 text-muted-foreground max-w-xs">
              Bridging the physical and digital worlds.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="font-semibold text-lg mb-4">Connect with Us</h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <Link href="mailto:contact@tapconsol.com" className="text-muted-foreground hover:text-foreground transition-colors">
              contact@tapconsol.com
            </Link>
            <p className="text-muted-foreground mt-1">+91 99638 43862</p>
            <p className="text-muted-foreground mt-1">+91 98494 99631</p>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Tapconsol Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
