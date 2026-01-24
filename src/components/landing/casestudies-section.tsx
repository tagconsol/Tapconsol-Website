import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

const resources = [
  {
    id: "case-study-1",
    title: "Optimizing Urban Mobility in Major Metro",
    description: "How our integrated sensor network and GIS platform reduced traffic congestion by 15%.",
    imageId: "case-study-1",
    type: "Case Study",
  },
  {
    id: "whitepaper-1",
    title: "The Future of IoT in Precision Agriculture",
    description: "A technical deep-dive into leveraging real-time data for sustainable farming.",
    imageId: "case-study-2",
    type: "Whitepaper",
  },
  {
    id: "case-study-2",
    title: "Modernizing a National Utility Grid",
    description: "A look at the successful upgrade of a legacy SCADA system with minimal downtime.",
    imageId: "case-study-3",
    type: "Case Study",
  },
];

export function CaseStudiesSection() {
  return (
    <section className="py-20 md:py-28" id="resources">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">
            Case Studies & Whitepapers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our in-depth research and success stories to see our expertise in action.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => {
            const image = PlaceHolderImages.find((img) => img.id === resource.imageId);
            return (
              <Card key={resource.id} className="overflow-hidden flex flex-col group">
                {image && (
                  <div className="overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-110"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{resource.type}</Badge>
                  <CardTitle className="text-lg font-semibold">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="flex-grow">{resource.description}</CardDescription>
                  <Button variant="outline" className="mt-4 w-fit" asChild>
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" /> Download
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
