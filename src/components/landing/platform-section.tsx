import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function PlatformSection() {
  return (
    <section className="py-20 md:py-28" id="platform">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge variant="outline" className="mb-4 text-sm">Our Platform</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline mb-6">
              Unified 3D GIS & IoT Intelligence
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Our core platform offers an unparalleled, interactive view of your operations. Ingest real-time data from any source, visualize it in a 3D geospatial context, and run powerful analytics to unlock actionable insights.
            </p>
            <div className="space-y-4 inline-block text-left">
                <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p><span className="font-semibold">Real-Time Data Ingestion:</span> Connect to IoT sensors, databases, and APIs with ease.</p>
                </div>
                <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p><span className="font-semibold">Immersive 3D Visualization:</span> Gain spatial intelligence with interactive digital twins.</p>
                </div>
                 <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p><span className="font-semibold">Simulations & Predictive Analytics:</span> Model scenarios and forecast outcomes to de-risk decisions.</p>
                </div>
                 <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p><span className="font-semibold">Advanced Decision Support:</span> Turn complex data into clear, actionable intelligence.</p>
                </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105">
            <Image
                src="/solutions/s6.jpg"
                alt="3D GIS platform showing a city map with data points"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
