
import Image from "next/image";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { CtaSection } from "@/components/landing/cta-section";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Combine, Lightbulb, Handshake, Cpu, Bot } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const values = [
    {
        icon: <Combine className="h-8 w-8 text-primary" />,
        title: "Integrated Expertise",
        description: "From silicon to software, we manage the entire technology stack, ensuring seamless and robust system performance."
    },
    {
        icon: <Lightbulb className="h-8 w-8 text-primary" />,
        title: "Pragmatic Innovation",
        description: "We apply cutting-edge technology with a focus on real-world application, reliability, and long-term value."
    },
    {
        icon: <Handshake className="h-8 w-8 text-primary" />,
        title: "Collaborative Partnership",
        description: "We work closely with our clients as an extension of their team to understand unique challenges and deliver tailored, impactful solutions."
    }
];

const ExpertiseBlock = ({ icon, title, description, image, reverse = false }: { icon: React.ReactNode, title: string, description: string, image: React.ReactNode, reverse?: boolean }) => {
    return (
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className={cn("space-y-6", { "md:order-last": reverse })}>
                <div className="flex items-center gap-4">
                    {icon}
                    <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
                </div>
                <p className="text-lg text-muted-foreground">{description}</p>
            </div>
            <Card className="overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
                {image}
            </Card>
        </div>
    );
};

export default function AboutPage() {
    const storyImage = PlaceHolderImages.find((img) => img.id === 'case-study-3');

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
                <Badge variant="outline" className="mb-4 text-sm">Our Mission</Badge>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-6 font-headline">
                  An Engineering-First Partner You Can Trust
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  We are a team of dedicated engineers and problem-solvers passionate about bridging the gap between the physical and digital realms. Our mission is to build robust, reliable, and intelligent systems that deliver tangible value and long-term success.
                </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
            <div className="container mx-auto px-4">
                 <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-6 font-headline">
                            Our Story
                        </h2>
                        <div className="text-lg text-muted-foreground space-y-6">
                            <p>Founded on a passion for engineering excellence, Tap Consol was built to solve the complex challenges that live at the intersection of hardware and software.</p>
                            <p>We saw a critical need for a partner who could not just advise, but truly build and own the entire technology stack—from custom sensor design to the intelligent cloud platforms that make sense of the data. Today, we are that end-to-end partner for a growing number of clients across diverse industries, turning ambitious ideas into robust, real-world solutions.</p>
                        </div>
                    </div>
                     <div className="rounded-xl overflow-hidden shadow-2xl">
                        {storyImage && (
                        <Image
                            src={storyImage.imageUrl}
                            alt={storyImage.description}
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover aspect-[4/3]"
                            data-ai-hint={storyImage.imageHint}
                        />
                        )}
                    </div>
                </div>
            </div>
        </section>

        <section className="py-20 md:py-28 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">
                            Our Core Values
                        </h2>
                         <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                            These principles guide our work and our partnerships, ensuring we deliver excellence in everything we do.
                        </p>
                    </div>
                     <div className="grid md:grid-cols-3 gap-8 text-center">
                        {values.map((value) => (
                            <div key={value.title}>
                                <div className="flex justify-center mb-4">
                                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10">
                                        {value.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                                <p className="text-muted-foreground">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">
                        From Silicon to Software
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Our strength is our end-to-end capability. We master the entire data journey, from the sensor to the screen.
                    </p>
                </div>
                <div className="max-w-6xl mx-auto space-y-20">
                    <ExpertiseBlock 
                        icon={<Cpu className="h-10 w-10 text-primary" />}
                        title="Hardware & Embedded Engineering"
                        description="It all starts with reliable data capture. We design and build application-specific hardware, sensor packages, and robust firmware for resource-constrained devices, ensuring your data foundation is solid."
                        image={
                            <Image
                                src="/services/p3.jpg"
                                alt="Electronic Hardware Development Process"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover aspect-[4/3]"
                            />
                        }
                    />
                    <ExpertiseBlock 
                        icon={<Bot className="h-10 w-10 text-primary" />}
                        title="Platform & Intelligence"
                        description="Data becomes valuable when it’s transformed into insight. Our unified 3D GIS and IoT platforms process, analyze, and visualize complex datasets, turning raw information into actionable intelligence for decision-makers."
                        image={
                            <Image
                                src="/solutions/s6.jpg"
                                alt="3D GIS platform showing a city map with data points"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover aspect-[4/3]"
                            />
                        }
                        reverse={true}
                    />
                </div>
            </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
