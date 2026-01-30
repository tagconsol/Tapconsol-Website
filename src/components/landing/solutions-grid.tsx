import Image from "next/image";
import {
  Landmark,
  AirVent,
  Leaf,
  Waves,
  Droplets,
  Tractor,
  Thermometer,
  Siren,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import React from "react";
import { cn } from "@/lib/utils";

const solutions = [
  {
    icon: <Landmark />,
    name: "Smart Cities & Urban Planning",
    imageId: "solution-smart-cities",
    description: "Integrated solutions for traffic management, public safety, and resource optimization.",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    icon: <AirVent />,
    name: "Air Quality Monitoring",
    imageId: "iot-monitoring",
    description: "High-precision sensors and data analytics for environmental tracking.",
    className: "lg:col-span-2",
  },
  {
    icon: <Leaf />,
    name: "Environmental Monitoring",
    imageId: "solution-climate",
    description: "Track carbon emissions, weather patterns, and support sustainability initiatives.",
    className: "lg:col-span-1",
  },
  {
    icon: <Waves />,
    name: "Flood Modeling & Climate Risk",
    imageUrl: "/fra.jpg",
    imageAlt: "Flood modeling and climate risk assessment",
    description: "Simulate and predict flood impact to de-risk and plan effective emergency responses.",
    className: "lg:col-span-1",
  },
  {
    icon: <Droplets />,
    name: "Water Resource Management",
    imageId: "solution-water",
    description: "Intelligent systems for monitoring water quality, flow, and consumption to conserve resources.",
    className: "lg:col-span-2",
  },
  {
    icon: <Tractor />,
    name: "Agriculture & Crop Yield Analysis",
    imageId: "solution-agriculture",
    description: "Smart farming technology to boost yields and optimize resource usage with actionable data.",
    className: "lg:col-span-2",
  },
  {
    icon: <Thermometer />,
    name: "Weather Monitoring Systems",
    imageId: "gis-platform",
    description: "Real-time weather data collection and analysis for accurate forecasting and alerts.",
    className: "lg:col-span-2",
  },
  {
    icon: <Siren />,
    name: "Disaster Impact Analysis",
    imageUrl: "/diea.jpg",
    imageAlt: "Disaster impact and exposure analysis",
    description: "Assess and visualize the impact of disasters for more effective emergency response.",
    className: "lg:col-span-2",
  },
];

export function SolutionsGrid() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30" id="solutions">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm">Solutions</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">
            Applying Technology to Key Domains
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We adapt our core technologies to deliver powerful, domain-specific solutions that address critical challenges in both public and private sectors.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => {
            const typedSolution = solution as any;
            const imageFromPlaceholder = typedSolution.imageId ? PlaceHolderImages.find(img => img.id === typedSolution.imageId) : null;
            
            const imageUrl = typedSolution.imageUrl || imageFromPlaceholder?.imageUrl;
            const imageAlt = typedSolution.imageAlt || imageFromPlaceholder?.description || typedSolution.name;
            const imageHint = imageFromPlaceholder?.imageHint;

            return (
              <Card
                key={index}
                className={cn(
                  "group relative w-full overflow-hidden rounded-xl shadow-lg min-h-[20rem]",
                  typedSolution.className
                )}
              >
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill
                    className="z-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    {...(imageHint && { 'data-ai-hint': imageHint })}
                  />
                )}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-transparent"></div>

                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-bold leading-tight">{solution.name}</h3>
                    <div className="max-h-0 opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-40 group-hover:opacity-100">
                        <div className="flex items-start gap-3 pt-4">
                            <div className="flex-shrink-0 text-accent">
                                {React.cloneElement(solution.icon, { className: "w-6 h-6" })}
                            </div>
                            <p className="text-sm text-white/80">
                                {typedSolution.description}
                            </p>
                        </div>
                    </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
