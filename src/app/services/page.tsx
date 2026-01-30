
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Tap Consol's core engineering capabilities, including  comprehensive supply chain solutions, custom hardware and software development, and product development.",
};

const supplyChainServices = [
  {
    title: "Medical Supply",
    imageId: "medical-supply",
    items: [
      "Consumable and Disposable Medical Supply",
      "Durable Medical Equipment (DME) Supply",
      "Diagnostic and Laboratory Equipment Supply",
      "Pharmaceutical Raw Material Supply",
      "Surgical Instruments and Specialty Equipment Supply",
      "Personal Protective Equipment (PPE) & Sanitization supply",
    ],
  },
  {
    title: "Industrial Supply",
    imageId: "industrial-supply",
    items: [
      "Raw Materials Supply",
      "MRO (Maintenance, Repair, and Operations) Supply",
      "Industrial Hardware & Tools Supply",
      "Safety and PPE (Personal Protective Equipment) Supply",
      "Specialized Engineering Material supply",
    ],
  },
  {
    title: "Electrical & Electronics Supply",
    imageId: "electrical-supply",
    items: [
      "Assembly Materials & Consumables (PCBA) Supply",
      "Specialized Industrial Electrical Supply",
      "Solar and Renewable Energy equipment Supply",
      "Electrical Engineering Material supply",
      "Power Generation and Transmission Materials Supply",
    ],
  },
  {
    title: "Civil Supply",
    imageId: "civil-supply",
    items: [
      "Construction and Installation Supply",
      "Industrial and OEM Components Supply",
    ],
  },
];


const services = [
  {
    title: "Software And Firmware Development",
    imageUrl: "/services/p1.png",
    imageAlt: "Software and Firmware Development",
    description: "The combination of our technology skills and expertise in software development across various platforms enables TAGV to develop software for porting on to customized hardware.",
    competenciesTitle: "The core competencies of the team comprises of:",
    competencies: [
      "Software development on 8 bit, 16 bit and 32 bit RISC and CISC architecture based Micro-Controllers and DSPs",
      "Design of communication protocols",
      "Enhancement of existing applications",
      "Support for various target Micro-Controllers",
      "Migration between different OS's",
      "Optimization of applications",
      "Performance tuning",
      "RTOS - Embedded Linux, Montavista, Tasking, CMX, etc.",
      "Linux Device drivers",
      "Boot Loaders for 32 bit Micro-Controllers",
      "Device Drivers and interfaces for Modbus, CAN BUS, TCP/IP and USB, etc.",
    ],
    protocolsTitle: "Protocols:",
    protocols: [
      "TCP/IP, UDP, DHCP, HTTP, SNMP",
      "CAN",
      "MODBUS",
    ],
  },
  {
    title: "Hardware Development",
    imageUrl: "/services/p3.jpg",
    imageAlt: "Electronic Hardware Development Process",
    description: "The combination of our technology skills and expertise in Hardware development enables TAGV to develop customized hardware.",
    competenciesTitle: "The core competencies of the team comprises of:",
    competencies: [
      "High speed Digital Circuit Designs",
      "RF Designs",
      "Low power and Battery operated Circuit Designs",
      "Analog Circuit Designs",
      "FPGA / ASIC Designs",
      "Board Bring-Up",
      "Mixed signal Circuit Designs",
      "SPICE Simulation Designs",
    ],
  },
  {
    title: "Product Development",
    imageUrl: "/services/p2.jpg",
    imageAlt: "Product Development",
    description: "The team at TAGV has the expertise to design and develop products from concept to product, confirming to industry standards. Customer inputs in the form of a statement of work are converted to the following final package of standard deliverables:",
    competenciesTitle: "Standard Deliverables:",
    competencies: [
      "System Architecture Design Document",
      "Hardware Design Document",
      "Software Design Document",
      "Schematics and PCB files / Gerber Files for the PCB",
      "Software Listing (fully commented)",
      "Flow Charts",
      "Verification and Validation",
      "Fully working prototypes of the product developed",
      "Specially fabricated Test Jigs (optional)",
      "Product Documentation",
      "Pilot Production",
    ],
  },
  {
    title: "Creative & Modern Visuals",
    imageUrl: "/services/animations.jpg",
    imageAlt: "Digital animation and creative visuals",
    description: "Struggling to explain your product? Let us animate it. We bridge the gap between technical specs and human connection through dynamic animation and high-energy presentations. Whether you're launching a new SaaS platform or a physical product, we create the 'scroll-stopping' visuals that turn viewers into users.",
    competenciesTitle: "Our Visual Services Include:",
    competencies: [
      "Explainer Videos: 2D and 3D animations that make sense of your big ideas.",
      "Product Walkthroughs: Guided demos that highlight features and solve pain points.",
      "Deck Design: Modern, interactive presentations that leave a lasting impression.",
    ],
  },
];

const devLanguages = {
  title: "Development Languages",
  items: ["Assembly language", "Embedded C & C++", "VHDL", "Verilog"],
};

const crossCompilers = {
  title: "Cross Compilers",
  items: ["Keil Compiler", "Code Composer Studio", "Quartus 2", "ISC Foundate", "GSC"],
};

const debuggingTools = {
  title: "Debugging Tools",
  items: ["BDI - BDM 2000 Debugger", "J-TAG Debug Adapter - Silabs", "J-TAG XDS-100V2 debugger"],
};

const microcontrollers = {
  title: "Microcontrollers",
  imageUrl: "/services/microcontrollers.png",
  imageAlt: "Microcontrollers",
  items: [
    "8bit - Atmel, Philips, Dallas, Hitachi",
    "8bit RISC - Silabs",
    "16bit - Philips XA-G3, Hitachi",
    "32bit - NXP, Freescale",
    "32bit DSP - TI",
    "64bit NW Processor - Wintegra",
  ],
};

const interfaces = {
  title: "Interfaces",
  imageUrl: "/services/interfaces.png",
  imageAlt: "Interfaces",
  items: [
    "8bit - Atmel, Philips, Dallas, Hitachi",
    "RS-232, RS-485, RS-422",
    "Ethernet",
    "USB",
    "V35",
    "SPI, I2C",
    "SDI-12",
  ],
};


const SupplyChainCard = ({ service }: { service: any }) => {
    const image = PlaceHolderImages.find((img) => img.id === service.imageId);
    return (
        <Card className="flex flex-col overflow-hidden group transition-shadow hover:shadow-xl">
            {image && (
                 <div className="overflow-hidden">
                    <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                    />
                </div>
            )}
            <CardHeader>
                <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                 <ul className="space-y-3 text-muted-foreground">
                    {service.items.map((item: string) => (
                        <li key={item} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};


const ServiceItem = ({ service, reverse = false }: { service: any, reverse?: boolean }) => {
    const imageFromPlaceholder = service.imageId ? PlaceHolderImages.find((img) => img.id === service.imageId) : null;
    
    const imageUrl = service.imageUrl || imageFromPlaceholder?.imageUrl;
    const imageAlt = service.imageAlt || imageFromPlaceholder?.description || service.title;
    const imageHint = imageFromPlaceholder?.imageHint;

    return (
    <div className="py-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={cn("space-y-6", { "md:order-last": reverse })}>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                {service.title}
                </h2>
                <div className="text-muted-foreground space-y-6 text-lg">
                  <p>{service.description}</p>
                </div>
            </div>
            <div>
                 {imageUrl && (
                    <Card className="overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
                    <Image
                        src={imageUrl}
                        alt={imageAlt}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover aspect-[4/3]"
                        {...(imageHint && { 'data-ai-hint': imageHint })}
                    />
                    </Card>
                )}
            </div>
        </div>

        {service.competencies && service.competencies.length > 0 && (
            <div className="mt-12">
                <h3 className="text-2xl font-semibold text-foreground mb-6">{service.competenciesTitle}</h3>
                <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 text-muted-foreground">
                    {service.competencies.map((item: string) => (
                        <li key={item} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )}

        {service.protocols && service.protocols.length > 0 && (
            <div className="mt-12">
                <h3 className="text-2xl font-semibold text-foreground mb-6">{service.protocolsTitle}</h3>
                <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-muted-foreground">
                    {service.protocols.map((item: string) => (
                        <li key={item} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
    )
};

const SimpleListCard = ({ title, items }: { title: string, items: string[] }) => (
  <Card className="p-6 h-full bg-card/80">
    <h3 className="text-xl font-semibold text-foreground mb-4">{title}</h3>
    <ul className="space-y-2 text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </Card>
);

const ImageWithList = ({ title, imageUrl, imageAlt, items, reverse = false }: { title: string, imageUrl: string, imageAlt: string, items: string[], reverse?: boolean}) => (
    <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className={cn("space-y-4", { "md:order-last": reverse })}>
            <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
            <ul className="space-y-2 text-muted-foreground text-lg">
                {items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <Card className="overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
            <Image
                src={imageUrl}
                alt={imageAlt}
                width={800}
                height={600}
                className="w-full h-auto object-cover aspect-[4/3]"
            />
            </Card>
        </div>
    </div>
);


export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">

        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground font-headline">
                Supply Chain Solutions
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive procurement and supply services across key industrial, medical, and technical sectors.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {supplyChainServices.map((service) => (
                    <SupplyChainCard key={service.title} service={service} />
                ))}
            </div>
          </div>
        </section>


        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground font-headline">
                Our Core Engineering Capabilities
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide a complete ecosystem of services and technologies to bring your most ambitious projects to life, from the sensor to the screen.
              </p>
            </div>
             <div className="max-w-6xl mx-auto divide-y divide-border">
                {services.map((service, index) => (
                    <ServiceItem key={service.title} service={service} reverse={index % 2 !== 0} />
                ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">
                Our Technical Expertise
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                A deep-dive into the languages, tools, and platforms we master.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                <SimpleListCard title={devLanguages.title} items={devLanguages.items} />
                <SimpleListCard title={crossCompilers.title} items={crossCompilers.items} />
                <SimpleListCard title={debuggingTools.title} items={debuggingTools.items} />
            </div>

            <div className="space-y-20 divide-y divide-border/50">
                <div className="pt-20 first:pt-0 first:divide-y-0">
                    <ImageWithList title={microcontrollers.title} imageUrl={microcontrollers.imageUrl} imageAlt={microcontrollers.imageAlt} items={microcontrollers.items} />
                </div>
                 <div className="pt-20 first:pt-0 first:divide-y-0">
                    <ImageWithList title={interfaces.title} imageUrl={interfaces.imageUrl} imageAlt={interfaces.imageAlt} items={interfaces.items} reverse={true} />
                </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
