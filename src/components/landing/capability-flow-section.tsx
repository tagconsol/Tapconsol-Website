import { HardDrive, Waypoints, BrainCircuit } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function CapabilityFlowSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <Badge variant="outline" className="mb-4 text-sm">Our Process</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">
            From Silicon to Decision
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We manage the entire data journey, ensuring seamless integration and reliability from the physical world to your command center.
          </p>
        </div>
        <div className="relative">
          <div 
            className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-border -translate-y-1/2"
            aria-hidden="true"
          />
           <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start text-center relative space-y-12 md:space-y-0">
              <FlowStep icon={<HardDrive className="w-12 h-12" />} title="Hardware" description="Custom-designed devices that capture data from the physical world." />
              <FlowStep icon={<Waypoints className="w-12 h-12" />} title="Platform" description="Intelligent software to process, analyze, and visualize your data." />
              <FlowStep icon={<BrainCircuit className="w-12 h-12" />} title="Intelligence" description="Turning complex data into clear, actionable intelligence and decision support." />
          </div>
        </div>
      </div>
    </section>
  );
}


function FlowStep({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="flex flex-col items-center">
             <div className="flex items-center justify-center h-24 w-24 rounded-full bg-background border-2 border-primary/20 text-accent mb-6 shadow-md z-10">
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground px-4">{description}</p>
        </div>
    );
}
