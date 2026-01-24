import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Cpu, Layers3, Wifi, Shuffle, Globe } from "lucide-react";

const services = [
  {
    icon: <Cpu className="w-10 h-10 text-accent" />,
    title: "Custom Hardware",
    description: "Designing and building application-specific hardware and sensor packages from the ground up.",
  },
  {
    icon: <Layers3 className="w-10 h-10 text-accent" />,
    title: "Embedded Systems",
    description: "Developing robust firmware and software for resource-constrained devices and microcontrollers.",
  },
  {
    icon: <Wifi className="w-10 h-10 text-accent" />,
    title: "IoT Solutions",
    description: "Creating scalable Internet of Things ecosystems for data collection, monitoring, and control.",
  },
  {
    icon: <Shuffle className="w-10 h-10 text-accent" />,
    title: "Legacy Modernization",
    description: "Upgrading and integrating outdated hardware and systems into modern, connected platforms.",
  },
  {
    icon: <Globe className="w-10 h-10 text-accent" />,
    title: "3D GIS Intelligence",
    description: "Visualizing complex datasets on interactive 3D geospatial platforms for deeper insights.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 md:py-28" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">
            Our Core Capabilities
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide an end-to-end suite of services to deliver comprehensive, integrated solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="mb-2 text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription>{service.description}</CardDescription>
            </Card>
          ))}
           <Card className="md:col-span-2 lg:col-span-1 flex flex-col items-center justify-center text-center p-6 bg-primary text-primary-foreground">
             <CardHeader className="p-0">
                <CardTitle className="mb-2 text-xl font-semibold">And More...</CardTitle>
              </CardHeader>
              <CardDescription className="text-primary-foreground/80">Contact us to discuss your unique project requirements and challenges.</CardDescription>
          </Card>
        </div>
      </div>
    </section>
  );
}
