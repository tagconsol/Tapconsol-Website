import { Badge } from "@/components/ui/badge";
import { Zap, ShieldCheck, Handshake } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";


const features = [
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Integrated Expertise",
        description: "From silicon to software, we manage the entire stack for seamless performance."
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: "Pragmatic Innovation",
        description: "We apply cutting-edge technology with a focus on real-world reliability and value."
    },
    {
        icon: <Handshake className="h-8 w-8 text-primary" />,
        title: "Collaborative Partnership",
        description: "We work as an extension of your team to deliver tailored, impactful solutions."
    }
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-4 text-sm">Why Choose Us</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline mb-6">
            An Engineering-First Partner You Can Trust
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            We are a team of dedicated engineers and problem-solvers. Our focus is on building robust, reliable systems that deliver tangible value and long-term success.
          </p>
           <div className="grid md:grid-cols-3 gap-8 text-left space-y-8 md:space-y-0">
              {features.map((feature) => (
                <Card key={feature.title} className="bg-card/50 border-border/50 text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <CardHeader>
                        <div className="flex justify-center mb-4">{feature.icon}</div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                </Card>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
