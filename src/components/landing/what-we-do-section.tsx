import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Cpu, Layers3, Wifi, Shuffle, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: <Cpu className="w-8 h-8 text-accent" />,
    title: "Custom Hardware Development",
    description: "From concept to production, we design and engineer application-specific hardware, sensor packages, and complex circuit boards to capture data reliably from the physical world.",
  },
  {
    icon: <Layers3 className="w-8 h-8 text-accent" />,
    title: "Embedded & Firmware",
    description: "Our expertise in 8, 16, and 32-bit architectures ensures robust firmware and software for microcontrollers and resource-constrained embedded systems.",
  },
  {
    icon: <Wifi className="w-8 h-8 text-accent" />,
    title: "IoT & Connectivity",
    description: "We build scalable Internet of Things ecosystems for remote data collection, monitoring, and control, integrating protocols like Modbus, CAN, TCP/IP, and USB.",
  },
  {
    icon: <Shuffle className="w-8 h-8 text-accent" />,
    title: "E-Engineering & Modernization",
    description: "Breathe new life into legacy systems. We specialize in reverse-engineering and upgrading outdated hardware into modern, connected, and intelligent platforms.",
  },
  {
    icon: <Globe className="w-8 h-8 text-accent" />,
    title: "3D Intelligence Platform",
    description: "Our unified 3D GIS platform transforms complex datasets into actionable intelligence through immersive visualization, simulation, and predictive analytics.",
  },
];

export function WhatWeDoSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm">What We Do</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">
            Integrated Expertise for Complex Challenges
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide a complete ecosystem of services and technologies to bring your most ambitious projects to life, from the sensor to the screen.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-left p-6 bg-card/80 backdrop-blur-sm border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="p-0">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="mb-2 text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription>{service.description}</CardDescription>
            </Card>
          ))}
           <Card className="flex flex-col text-left p-6 bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="p-0">
                <CardTitle className="mb-2 text-xl font-semibold">Have a unique challenge?</CardTitle>
              </CardHeader>
              <CardDescription className="text-primary-foreground/80">We excel at solving complex, non-standard problems. Contact us to discuss your project requirements.</CardDescription>
            </Card>
        </div>
      </div>
    </section>
  );
}
