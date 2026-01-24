'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Phone, Building, MessageSquare, User, Briefcase } from 'lucide-react';
import { Github, Twitter, Linkedin } from "lucide-react";
import Link from 'next/link';

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  company: z.string().optional(),
  subject: z.string().min(5, {
    message: 'Subject must be at least 5 characters.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log(data);
    toast({
      title: 'Message Sent!',
      description: "We've received your message and will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-6 font-headline">
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                We're here to answer your questions and explore how we can work together. Reach out to us, and let's start a conversation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="bg-card/50 border-border/50 shadow-lg">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>Fill out the form and we'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2"><User className="h-4 w-4 text-muted-foreground" /> Full Name</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2"><Mail className="h-4 w-4 text-muted-foreground" /> Email Address</FormLabel>
                            <FormControl>
                              <Input  {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                       <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-muted-foreground" /> Company (Optional)</FormLabel>
                            <FormControl>
                              <Input  {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2"><MessageSquare className="h-4 w-4 text-muted-foreground" /> Subject</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us how we can help."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" size="lg" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              <div className="space-y-8">
                 <Card className="bg-card/50 border-border/50 p-6 shadow-lg">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h3>
                    <div className="space-y-4 text-muted-foreground">
                        <a href="mailto:contact@tagconsol.com" className="flex items-center gap-3 group">
                            <Mail className="h-5 w-5 text-primary"/>
                            <span className="group-hover:text-foreground transition-colors">contact@tagconsol.com</span>
                        </a>
                        <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-primary"/>
                            <span>+91 9876543210</span>
                        </div>
                         <div className="flex items-center gap-3">
                            <Building className="h-5 w-5 text-primary"/>
                            <span>Banjara Hills, Hyderabad</span>
                        </div>
                    </div>
                 </Card>

                 <Card className="bg-card/50 border-border/50 p-6 shadow-lg">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Connect with Us</h3>
                    <p className="text-muted-foreground mb-4">Follow us on our social media channels.</p>
                     <div className="flex space-x-2">
                        <Button variant="outline" size="icon" asChild>
                            <Link href="#" aria-label="Twitter">
                                <Twitter className="h-5 w-5" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                            <Link href="#" aria-label="LinkedIn">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                            <Link href="#" aria-label="GitHub">
                                <Github className="h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                 </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
