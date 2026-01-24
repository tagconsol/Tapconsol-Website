import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const solutions = [
  {
    id: "smart-cities",
    name: "Smart Cities",
    description: "Enhance urban living with integrated solutions for traffic management, public safety, and resource optimization. Our platforms provide city planners with the tools to build more efficient and responsive urban environments.",
    imageId: "solution-smart-cities",
  },
  {
    id: "climate",
    name: "Climate",
    description: "Monitor environmental changes with high-precision sensors and data analytics. We help organizations track carbon emissions, air quality, and meteorological conditions to support sustainability initiatives.",
    imageId: "solution-climate",
  },
  {
    id: "water",
    name: "Water",
    description: "Implement intelligent water management systems for reservoirs, distribution networks, and treatment facilities. Our solutions enable real-time monitoring of quality, flow, and consumption to conserve resources.",
    imageId: "solution-water",
  },
  {
    id: "agriculture",
    name: "Agriculture",
    description: "Boost crop yields and optimize resource usage with smart farming technology. From soil moisture sensors to drone-based imaging, we provide farmers with actionable data for precision agriculture.",
    imageId: "solution-agriculture",
  },
  {
    id: "urban-planning",
    name: "Urban Planning",
    description: "Utilize 3D GIS and simulation tools to model and analyze urban development projects. Our platform helps planners visualize the impact of new infrastructure and zoning changes before breaking ground.",
    imageId: "solution-urban-planning",
  },
];

export function SolutionsSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/50" id="solutions">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">
            Domain-Specific Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We apply our core technologies to solve challenges across various industries.
          </p>
        </div>
        <Tabs defaultValue="smart-cities" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-auto">
            {solutions.map((solution) => (
              <TabsTrigger key={solution.id} value={solution.id}>
                {solution.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {solutions.map((solution) => {
            const image = PlaceHolderImages.find((img) => img.id === solution.imageId);
            return (
              <TabsContent key={solution.id} value={solution.id}>
                <Card className="overflow-hidden mt-6">
                  <div className="grid md:grid-cols-2">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                    <div className="p-8 md:p-12">
                      <h3 className="text-2xl font-bold mb-4">{solution.name}</h3>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
