"use client";
import Image from "next/image";
import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { Line, LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const generateData = () => {
    return Array.from({ length: 12 }, (_, i) => ({
      month: new Date(2023, i, 1).toLocaleString('default', { month: 'short' }),
      sensor1: Math.floor(Math.random() * (150 - 50 + 1)) + 50,
      sensor2: Math.floor(Math.random() * (120 - 30 + 1)) + 30,
    }));
};

const initialChartData = Array.from({ length: 12 }, (_, i) => ({
    month: new Date(2023, i, 1).toLocaleString('default', { month: 'short' }),
    sensor1: 0,
    sensor2: 0,
}));


export function VisualizationSection() {
    const [chartData, setChartData] = useState(initialChartData);

    useEffect(() => {
        setChartData(generateData());
        const interval = setInterval(() => {
            setChartData(currentData => {
                const newDataPoint = {
                    month: new Date(2023, currentData.length % 12, 1).toLocaleString('default', { month: 'short' }),
                    sensor1: Math.floor(Math.random() * (150 - 50 + 1)) + 50,
                    sensor2: Math.floor(Math.random() * (120 - 30 + 1)) + 30,
                };
                const updatedData = [...currentData.slice(1), newDataPoint];
                // Remap months to keep them sequential in view
                return updatedData.map((d, i) => ({
                    ...d,
                    month: new Date(2023, i, 1).toLocaleString('default', { month: 'short' })
                }));
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

  const gisPlatformImage = useMemo(() => PlaceHolderImages.find(img => img.id === 'gis-platform'), []);

  const chartConfig = {
    sensor1: { label: "Sensor A", color: "hsl(var(--accent))" },
    sensor2: { label: "Sensor B", color: "hsl(var(--primary))" },
  };

  return (
    <section className="py-20 md:py-28" id="visualization">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline mb-4">
              Real-time Sensor Data Visualization
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our 3D GIS platform offers an unparalleled, interactive view of your operations. Monitor real-time data from IoT sensors, track assets, and gain spatial intelligence at a glance.
            </p>
            <Card className="overflow-hidden shadow-xl">
                 <CardHeader>
                    <CardTitle>Live Sensor Feed</CardTitle>
                    <CardDescription>Data streams from two sample sensors over the last 12 data points.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig} className="aspect-video w-full">
                        <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                             <YAxis stroke="hsl(var(--muted-foreground))" />
                            <Tooltip content={<ChartTooltipContent />} />
                            <Line dataKey="sensor1" type="monotone" stroke="var(--color-sensor1)" strokeWidth={2} dot={false} />
                            <Line dataKey="sensor2" type="monotone" stroke="var(--color-sensor2)" strokeWidth={2} dot={false} />
                        </LineChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </CardContent>
            </Card>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105">
            {gisPlatformImage && (
              <Image
                src={gisPlatformImage.imageUrl}
                alt={gisPlatformImage.description}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                data-ai-hint={gisPlatformImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
