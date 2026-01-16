"use client";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Camera } from "lucide-react";
import Image from "next/image";

const galleryImages = [
  "https://content.jdmagicbox.com/v2/comp/karwar/u6/9999p8382.8382.240505225621.p7u6/catalogue/jhfc-and-gst-nutrition-point-bazar-road-honnavar-karwar-gyms-o03vgxk8q9.jpg",
  "https://lh3.googleusercontent.com/gP5dE6SfG7EV3Nn8g94O7dPka0SmAgfMKofmj5zA4Bo35GEHu8W9VPWlEUc66FgUj2E6rb94-rSQCvIURYqcFj2EUzw=w400-rw",
  "https://img.fitimg.in/studios/studio1748350855-luq0wsmsimhdks3uyr23.png",
  "https://content.jdmagicbox.com/v2/comp/kumta/b9/9999p8386.8386.220309021616.x9b9/catalogue/health-point-kumta-gyms-h6g9k6kcrx.jpg",
  "https://content.jdmagicbox.com/v2/comp/sagara/t6/9999p8182.8182.250508040801.i4t6/catalogue/shivappanayaka-multi-gym-shivappa-nayk-nagar-sagara-gyms-f0lx0uhpek.jpg"
];

export const GallerySection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  );

  return (
    <section id="gallery" className="py-20 sm:py-32 relative overflow-hidden bg-background">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16 space-y-6">
          <Badge variant="secondary" className="mb-4 bg-secondary/10 text-secondary-foreground border-secondary/20">
            <Camera className="w-4 h-4 mr-2 inline text-secondary" />
            Our Facility
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter">
            State-of-the-Art{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Environment
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore the space where transformations happen. Clean, modern, and equipped for results.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {galleryImages.map((src, index) => (
              <CarouselItem key={index}>
                <div className="overflow-hidden rounded-2xl border-2 border-primary/20 shadow-2xl shadow-primary/10">
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src={src}
                      alt={`Gym gallery image ${index + 1}`}
                      className="w-full h-full object-cover"
                      width={1200}
                      height={1250}
                      priority
                    />
                  </AspectRatio>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background/50 text-foreground hover:bg-background/75 transition-all" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background/50 text-foreground hover:bg-background/75 transition-all" />
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="flex items-center justify-center gap-2 rounded-full bg-card/80 backdrop-blur-sm p-2 border border-white/10">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current - 1 ? "w-6 bg-primary" : "bg-muted hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};
