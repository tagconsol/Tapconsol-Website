import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline mb-6">
          Ready to build the future?
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
          Let's discuss how our integrated engineering expertise can help you achieve your goals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/solutions">
              Explore Our Solutions
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">
              Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
