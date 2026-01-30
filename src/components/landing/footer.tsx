import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/">
              <Image
                src="/newlogo.png"
                alt="Tap Consol Logo"
                width={100}
                height={100}
              />
            </Link>
            <p className="mt-2 text-muted-foreground max-w-xs">
              Bridging the physical and digital worlds.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2 items-center md:items-start">
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
              <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link>
              <Link href="/solutions" className="text-muted-foreground hover:text-foreground transition-colors">Solutions</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <div className="flex flex-col space-y-2 items-center md:items-start">
              <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
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
          <p>&copy; {new Date().getFullYear()} Tap Consol. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
