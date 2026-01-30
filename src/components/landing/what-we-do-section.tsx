import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Cpu, Layers3, Wifi, Shuffle, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: <Cpu className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />,
    title: "Custom Hardware Development",
    description: "From concept to production, we design and engineer application-specific hardware, sensor packages, and complex circuit boards to capture data reliably from the physical world.",
    className: "lg:col-span-2",
  },
  {
    icon: <Layers3 className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />,
    title: "Embedded & Firmware",
    description: "Our expertise in 8, 16, and 32-bit architectures ensures robust firmware and software for microcontrollers and resource-constrained embedded systems.",
    className: "lg:col-span-2",
  },
  {
    icon: <Wifi className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />,
    title: "IoT & Connectivity",
    description: "We build scalable Internet of Things ecosystems for remote data collection, monitoring, and control, integrating protocols like Modbus, CAN, TCP/IP, and USB.",
    className: "lg:col-span-1",
  },
  {
    icon: <Shuffle className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />,
    title: "E-Engineering & Modernization",
    description: "Breathe new life into legacy systems. We specialize in reverse-engineering and upgrading outdated hardware into modern, connected, and intelligent platforms.",
    className: "lg:col-span-2",
  },
  {
    icon: <Globe className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />,
    title: "3D Intelligence Platform",
    description: "Our unified 3D GIS platform transforms complex datasets into actionable intelligence through immersive visualization, simulation, and predictive analytics.",
    className: "lg:col-span-1",
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={cn(
                "group relative flex flex-col text-left p-6 bg-card border-border/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden",
                service.className
              )}
            >
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="p-0 z-10">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="mb-2 text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="z-10 flex-grow">{service.description}</CardDescription>
            </Card>
          ))}
           <Card className="group relative flex flex-col text-left p-6 bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 lg:col-span-4 overflow-hidden">
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="p-0 z-10">
                <CardTitle className="mb-2 text-xl font-semibold">Creative & Modern Visuals</CardTitle>
              </CardHeader>
              <CardDescription className="z-10 text-primary-foreground/80 flex-grow">
                We bridge the gap between technical specs and human connection through dynamic animation and high-energy presentations.
              </CardDescription>
            </Card>
        </div>
      </div>
    </section>
  );
}
