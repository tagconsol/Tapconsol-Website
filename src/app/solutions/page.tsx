
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const solutionsByCategory = [
  {
    category: "Platform & GIS",
    id: "platform",
    solutions: [
      {
        title: "Smart Living GIS Visualisation Eco System",
        image: "/solutions/s1.png",
        imageAlt: "Smart Living GIS Visualisation Eco System",
        content: (
           <>
            <p className="text-lg">
              Our Web based Smart Living 3D GIS Engine simulate models for events processing and supports different Operating Systems enabling new business models.
            </p>
            <p className="text-lg">
              The turn key objective is the identification of the environmental, social, and economic indicators used in order to build smart living models. Location specific decision making for improving socio-economic development, the quality of life, land use, transport and user needs, classified & evaluate. The 3D GIS Engine solution enables Big Data analytics and Alert methodologies to monitor data coming from different sources.
            </p>
          </>
        ),
      },
      {
        title: "Device Management",
        image: "/solutions/s11.png",
        imageAlt: "Device Management",
        content: (
           <>
            <p className="text-lg">
              Our Device Management Application shows the weather data of individual parameters with respected units and their location on map from weather station data.
            </p>
            <h3 className="text-2xl font-semibold text-foreground pt-4">Objectives:</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>3D based solution for weather stations data</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>View Data of every station and indicate it index level</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>Charts and Reports with respected to date</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>Comparision of two or three station data</span>
              </li>
            </ul>
          </>
        ),
      },
       {
        title: "Device Management Reports",
        image: "/solutions/s12.png",
        imageAlt: "Device Management Reports",
        content: (
          <>
            <p className="text-lg">
              Our Device Management of Reports provide valuable information of weather data.
            </p>
            <h3 className="text-2xl font-semibold text-foreground pt-4">Objectives:</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>View indiviual station data</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>Get data of corresponding data or date range</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>Generate Reports of pdf, csv, txt, xls formats</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>User can filter particular parameters</span>
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "3D GIS Model",
        image: "/solutions/s6.jpg",
        imageAlt: "3D GIS Model",
        content: (
          <p className="text-lg">
            This tool is the base of Web based 3D visualization software. Manages all the data and services. Renders all standard GIS specific data formats. Users and citizens can investigate their location of interest and perform analysis.
          </p>
        ),
      },
    ]
  },
  {
    category: "Environmental Intelligence",
    id: "environmental",
    solutions: [
      {
        title: "IOT Environmental Monitoring",
        image: "/solutions/s2.png",
        imageAlt: "IOT Environmental Monitoring",
        content: (
          <>
            <p className="text-lg">
              Our 3D based Air Quality Indexing Solution will access and host emissions data, manipulate it and produce modelled emissions with suitable spatial scales for National to Urban outdoor air quality 3D modelling and analysis.
            </p>
            <h3 className="text-2xl font-semibold text-foreground pt-4">Objectives:</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>3D based solution for Air Quality Indexing</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>Predict future changes in sources, emissions and atmospheric processes</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>Predict exposure and health impacts of vulnerable groups</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>Catalyze innovation in technology, business models and policy best practices</span>
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Urban Outdoor Air Quality 3D Modelling",
        image: "/solutions/s3.jpg",
        imageAlt: "Urban Outdoor Air Quality 3D Modelling",
        content: (
          <ul className="space-y-3 text-lg">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <span>Develop and validate a model to simulate UK National to street scale outdoor air quality</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <span>Include a verification capability for urban air quality predictions</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <span>Produce National to local scale outdoor air quality data suitable for exposure calculations</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <span>Deliver this as an open source community modelling capability</span>
            </li>
          </ul>
        ),
      },
      {
        title: "Air Quality Exposure Modelling",
        image: "/solutions/s4.png",
        imageAlt: "Air Quality Exposure Modelling",
        content: (
          <ul className="space-y-3 text-lg">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <span>Develop a UK exposure 3D modelling capability</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <span>This will include population groups and individual movementbased approaches to exposure calculation</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <span>Be able to use National to local scale outdoor air quality data</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <span>Demonstrate the capability through the generation of exposure assessments</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <span>Deliver this as an open source community 3D modelling capability</span>
            </li>
          </ul>
        ),
      },
      {
        title: "IOT Flood Modeling Solutions",
        image: "/solutions/s5.png",
        imageAlt: "IOT Flood Modeling Solutions",
        content: (
          <>
            <p className="text-lg">
              This tool is about simulation of flood, river and sea level rise on 3D Platform through which user will be able to analyze and make decisions for the course of actions in the specific area of impact.
            </p>
            <h3 className="text-2xl font-semibold text-foreground pt-4">Objectives:</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>3D based solution for Flash flood Monitoring, river level rise and sea level rise</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>Predict future changes in sources, impact and plan for emergency response</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>Plan safety measures such as evacuation & first responder actions</span>
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Ground Water 3D Modeling",
        image: "/solutions/s7.jpg",
        imageAlt: "Ground Water 3D Modeling",
        content: (
          <>
            <p className="text-lg">
              Ground water has become the major source of water to meet the requirements of domestic, industrial and irrigation sectors. We processed bore well datasets, rain fall datasets, soil type datasets and rendered on to 3D engine for visualization, analysis and reports. Based on the depth of the water in the bore wells we classified the water availability as water bubbles with different colors and size.
            </p>
            <h3 className="text-2xl font-semibold text-foreground pt-4">Objectives:</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>3D based solution for Ground water table</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>Detailed analytics as year cycle</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>Predict water levels vs rain fall</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>Efficient Ground water management with Soil types, permeability, quality of water and recharging methodologies.</span>
              </li>
            </ul>
          </>
        ),
      },
    ]
  },
  {
    category: "Agricultural Technology",
    id: "agriculture",
    solutions: [
       {
        title: "3D Agricultural Workflow",
        image: "/solutions/s8.jpg",
        imageAlt: "3D Agricultural Workflow",
        content: (
          <>
            <p className="text-lg">
              3D GIS Engine offers a comprehensive collaborative platform to conjoin industry specific applications with spatial and non-spatial data. It presents with a configurable model for 3D elements like Agriculture, Environment, Disaster Management, Assets, Civic applications in a single working platform as an Accelerator. 3D GIS Engine will come as a ready-to-play kind of approach for clients which will reduce development efforts, cost and time.
            </p>
            <h3 className="text-2xl font-semibold text-foreground pt-4">Business Problems:</h3>
            <p className="text-lg">
              Tackle challenges in the field by converting images, data into information to maximize yield, operational efficiency, protection, storage and management.
            </p>
            <h3 className="text-2xl font-semibold text-foreground pt-4">Solution:</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-3 text-lg">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>Water Resource and quality</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>Soil Measurements</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>Crop varieties and rotation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>Nutrition & Crop Protection</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>Analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>Yield</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>Storage, Insurance & Management</span>
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "3D Crop Yield Modeling Solutions",
        image: "/solutions/s9.jpg",
        imageAlt: "3D Crop Yield Modeling Solutions",
        content: (
          <>
            <p className="text-lg">
              Crop yield data of 9 districts spatial boundary dataset, rain data and soil data received. We processed all data sets and rendered on to 3D engine for visualization, analysis and reports. Based on the yield output from each Tehsil, height factor (z factor) classified into the spatial representation.
            </p>
            <h3 className="text-2xl font-semibold text-foreground pt-4">Objectives:</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>3D based solution for Crop yield Indexing</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>Detailed analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>Predict Yield of the crop</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>Catalyze innovation in technology, business models and policy best practices</span>
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "3D Crop Yield Flood Modeling Solution",
        image: "/solutions/s10.jpg",
        imageAlt: "3D Crop Yield Flood Modeling Solution",
        content: (
           <>
            <p className="text-lg">
              On the Crop yield data, Flood simulation modeling applied with flash rain fall data. User will be able to analyze and make decisions for the course of actions in the specific area of impact.
            </p>
            <h3 className="text-2xl font-semibold text-foreground pt-4">Objectives:</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>3D based solution for Flash Flood Monitoring, River level rise and Sea level rise</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>Predict future changes in sources, impact and plan for emergency response</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>Plan safety protection measures such as evacuation & first responder actions</span>
              </li>
            </ul>
          </>
        ),
      },
    ]
  },
];

const SolutionItem = ({ solution, reverse = false }: { solution: any, reverse?: boolean }) => (
  <div className="py-12">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className={cn("space-y-6", { "md:order-last": reverse })}>
        <h2 className="text-3xl font-bold text-foreground mb-4">
          {solution.title}
        </h2>
        <div className="text-muted-foreground space-y-6 text-lg">
          {solution.content}
        </div>
      </div>
      <div>
        <Card className="overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
          <Image
            src={solution.image}
            alt={solution.imageAlt}
            width={800}
            height={600}
            className="w-full h-auto object-cover aspect-[4/3]"
          />
        </Card>
      </div>
    </div>
  </div>
);


export default function SolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground font-headline">
                Industry-Leading Solutions
              </h1>
               <p className="mt-4 text-lg text-muted-foreground">
                We apply our core technologies to solve critical challenges across various sectors, turning complex data into actionable intelligence. Explore our capabilities below.
              </p>
            </div>

            <Tabs defaultValue={solutionsByCategory[0].id} className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto mb-8">
                 {solutionsByCategory.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="py-2.5">
                    {category.category}
                  </TabsTrigger>
                ))}
              </TabsList>

              {solutionsByCategory.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                   <div className="max-w-6xl mx-auto divide-y divide-border">
                      {category.solutions.map((solution, index) => (
                        <SolutionItem key={solution.title} solution={solution} reverse={index % 2 !== 0} />
                      ))}
                   </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
