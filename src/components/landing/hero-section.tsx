"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ArrowRight, Cpu, Zap, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";


// Mock data generation for the chart
const generateChartData = () =>
  Array.from({ length: 12 }, (_, i) => ({
    month: new Date(2023, i).toLocaleString('default', { month: 'short' }),
    value: Math.floor(Math.random() * 80) + 20,
  }));

const initialChartData = Array.from({ length: 12 }, (_, i) => ({
  month: new Date(2023, i).toLocaleString('default', { month: 'short' }),
  value: 0,
}));

const chartConfig = { value: { label: "Throughput", color: "hsl(var(--primary))" } };


export function HeroSection() {
  const [stats, setStats] = useState({
    uptime: 99.9,
    processed: 1.2, // in millions
  });
  const [chartData, setChartData] = useState(initialChartData);

    useEffect(() => {
    // Start with initial data, then hydrate with random data on client.
    const timer = setTimeout(() => setChartData(generateChartData()), 100);

    const interval = setInterval(() => {
      setStats({
        uptime: 99.9,
        processed: parseFloat((Math.random() * (2.5 - 1) + 1).toFixed(1)),
      });
      setChartData(currentData => {
        const newDataPoint = {
            month: 'new', // placeholder
            value: Math.floor(Math.random() * 80) + 20,
        };
        const updatedData = [...currentData.slice(1), newDataPoint];
        // Remap months to keep them sequential
        return updatedData.map((d, i) => ({
            ...d,
            month: new Date(2023, i, 1).toLocaleString('default', { month: 'short' })
        }));
      });
    }, 3000); // Update every 3 seconds

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative py-20 md:py-28 bg-background overflow-hidden" id="hero">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Headline and CTA */}
          <div className="animate-fade-in-up text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-6 font-headline">
              Engineering Your Vision, From Concept to Cloud
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-muted-foreground mb-10 mx-auto lg:mx-0">
              We are your end-to-end engineering partner, delivering integrated solutions across custom hardware, embedded systems, intelligent software platforms, and global supply chain management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link href="/solutions">
                  Explore Solutions
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Interactive Elements */}
          <div className="relative h-96 hidden lg:flex items-center justify-center">
            {/* Background decorative elements */}
             <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float z-0"></div>
             <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float z-0" style={{animationDelay: '2s'}}></div>

            {/* Main Chart Card */}
            <Card className="w-full max-w-md bg-card/60 backdrop-blur-sm shadow-xl z-10 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Activity className="h-5 w-5 text-primary" />
                  <span>Real-time Data Throughput</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                         <defs>
                            <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                            </linearGradient>
                         </defs>
                        <XAxis
                          dataKey="month"
                          stroke="hsl(var(--muted-foreground))"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                        />
                        <YAxis
                          stroke="hsl(var(--muted-foreground))"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                          domain={['dataMin - 10', 'dataMax + 10']}
                          hide
                        />
                        <Tooltip
                            cursor={{
                              stroke: 'hsl(var(--border))',
                              strokeWidth: 1,
                              strokeDasharray: '3 3',
                            }}
                            content={<ChartTooltipContent indicator="line" />}
                          />
                        <Area dataKey="value" type="monotone" stroke="hsl(var(--primary))" strokeWidth={2} fillOpacity={1} fill="url(#fillGradient)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
              </CardContent>
            </Card>

            {/* Floating Stat Card 1 */}
             <Card className="absolute top-24 -left-12 w-56 bg-card/80 backdrop-blur-md shadow-2xl z-20 animate-fade-in-up animate-subtle-float" style={{animationDelay: '0.4s'}}>
                 <CardContent className="p-4 flex items-center gap-4">
                     <div className="p-3 bg-secondary rounded-lg">
                        <Cpu className="h-6 w-6 text-accent" />
                     </div>
                     <div>
                        <p className="text-sm text-muted-foreground">Network Uptime</p>
                        <p className="text-2xl font-bold">{stats.uptime}%</p>
                     </div>
                 </CardContent>
             </Card>

            {/* Floating Stat Card 2 */}
            <Card className="absolute bottom-0 -right-24 w-64 bg-card/80 backdrop-blur-md shadow-2xl z-20 animate-fade-in-up animate-subtle-float" style={{animationDelay: '0.8s'}}>
                <CardContent className="p-4 flex items-center gap-4">
                     <div className="p-3 bg-secondary rounded-lg">
                        <Zap className="h-6 w-6 text-accent" />
                     </div>
                     <div>
                        <p className="text-sm text-muted-foreground">Data Points Analyzed</p>
                        <p className="text-2xl font-bold">{stats.processed}M</p>
                     </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
