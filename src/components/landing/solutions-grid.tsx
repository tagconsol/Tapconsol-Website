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

const solutions = [
  {
    icon: <Landmark className="w-10 h-10 text-white" />,
    name: "Smart Cities & Urban Planning",
    imageId: "solution-smart-cities",
  },
  {
    icon: <AirVent className="w-10 h-10 text-white" />,
    name: "Air Quality Monitoring",
    imageId: "iot-monitoring",
  },
  {
    icon: <Leaf className="w-10 h-10 text-white" />,
    name: "Environmental Monitoring",
    imageId: "solution-climate",
  },
  {
    icon: <Waves className="w-10 h-10 text-white" />,
    name: "Flood Modeling & Climate Risk Assessment",
    imageUrl: "/fra.jpg",
    imageAlt: "Flood modeling and climate risk assessment",
  },
  {
    icon: <Droplets className="w-10 h-10 text-white" />,
    name: "Groundwater & Water Resource Management",
    imageId: "solution-water",
  },
  {
    icon: <Tractor className="w-10 h-10 text-white" />,
    name: "Agriculture & Crop Yield Analysis",
    imageId: "solution-agriculture",
  },
  {
    icon: <Thermometer className="w-10 h-10 text-white" />,
    name: "Weather Monitoring Systems",
    imageId: "gis-platform",
  },
  {
    icon: <Siren className="w-10 h-10 text-white" />,
    name: "Disaster Impact & Exposure Analysis",
    imageUrl: "/diea.jpg",
    imageAlt: "Disaster impact and exposure analysis",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => {
            const typedSolution = solution as any;
            const imageFromPlaceholder = typedSolution.imageId ? PlaceHolderImages.find(img => img.id === typedSolution.imageId) : null;
            
            const imageUrl = typedSolution.imageUrl || imageFromPlaceholder?.imageUrl;
            const imageAlt = typedSolution.imageAlt || imageFromPlaceholder?.description || typedSolution.name;
            const imageHint = imageFromPlaceholder?.imageHint;

            return (
              <Card
                key={index}
                className="group relative flex flex-col items-center justify-center text-center p-6 bg-card text-card-foreground shadow-sm hover:shadow-xl transition-all duration-300 h-52 overflow-hidden rounded-lg"
              >
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    {...(imageHint && { 'data-ai-hint': imageHint })}
                  />
                )}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>
                <div className="relative z-10 flex flex-col items-center justify-center text-white">
                  <div className="mb-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">{solution.icon}</div>
                  <h3 className="text-base font-semibold leading-snug flex-grow flex items-center">
                    {solution.name}
                  </h3>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
