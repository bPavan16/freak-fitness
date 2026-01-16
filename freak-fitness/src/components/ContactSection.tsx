"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { MapPin, Mail, Phone, Building } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 sm:py-32 relative bg-card border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-6">
          <Badge variant="secondary" className="mb-4 bg-secondary/10 text-secondary-foreground border-secondary/20">
            <Building className="w-4 h-4 mr-2 inline text-secondary" />
            Visit or Contact Us
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter">
            Get In{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {` We're here to answer any questions you have. Reach out and let's start your journey.`}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-6 p-6 rounded-2xl bg-background/50 border border-white/10">
              <div className="p-3 bg-primary/10 rounded-full">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Our Location</h3>
                <p className="text-muted-foreground">123 Fitness Street, Melbourne VIC 3000, Australia</p>
                <Button variant="link" className="p-0 h-auto mt-2 text-primary">
                  <a href="https://www.google.com/maps/search/?api=1&query=123+Fitness+Street,+Melbourne+VIC+3000" target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex items-start gap-6 p-6 rounded-2xl bg-background/50 border border-white/10">
              <div className="p-3 bg-primary/10 rounded-full">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Phone</h3>
                <a href="tel:+61234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +61 234 567 890
                </a>
                <p className="text-sm text-muted-foreground mt-1">Mon - Fri, 9am - 8pm</p>
              </div>
            </div>
            <div className="flex items-start gap-6 p-6 rounded-2xl bg-background/50 border border-white/10">
              <div className="p-3 bg-primary/10 rounded-full">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Email</h3>
                <a href="mailto:info@Freakfitness.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@Freakfitness.com
                </a>
                <p className="text-sm text-muted-foreground mt-1">We reply within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative h-full min-h-100 lg:min-h-full rounded-2xl overflow-hidden border border-white/10 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450937!2d144.95373531590415!3d-37.816279442021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d70f427a7bd3!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1678886 Federation Square"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
