import { Card, CardContent } from "@/components/ui/card";
import { HardDrive, ArrowRightLeft, CloudCog } from "lucide-react";

export function IntegrationSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/50" id="integration">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">
            From Hardware to Platform
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our unique strength lies in our ability to manage the entire data journey, ensuring seamless integration and reliability.
          </p>
        </div>
        <div className="relative">
            <div className="grid md:grid-cols-3 gap-8 items-center text-center">
                <Card className="p-8 shadow-lg">
                    <CardContent className="flex flex-col items-center p-0">
                        <HardDrive className="w-12 h-12 mb-4 text-accent" />
                        <h3 className="text-xl font-semibold mb-2">Hardware & Sensors</h3>
                        <p className="text-muted-foreground">Custom-designed devices that capture data from the physical world.</p>
                    </CardContent>
                </Card>
                <div className="flex justify-center">
                    <ArrowRightLeft className="w-16 h-16 text-muted-foreground/50 transform md:rotate-0 rotate-90" />
                </div>
                <Card className="p-8 shadow-lg">
                    <CardContent className="flex flex-col items-center p-0">
                        <CloudCog className="w-12 h-12 mb-4 text-accent" />
                        <h3 className="text-xl font-semibold mb-2">Cloud Platform</h3>
                        <p className="text-muted-foreground">Intelligent software to process, analyze, and visualize your data.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
