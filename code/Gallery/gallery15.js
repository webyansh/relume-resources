"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import type { ImageProps, CarouselApi } from "@relume_io/relume-ui";
import clsx from "clsx";

type Props = {
  heading: string;
  description: string;
  images: ImageProps[];
};

export type Gallery15Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Gallery15 = (props: Gallery15Props) => {
  const { heading, description, images } = {
    ...Gallery15Defaults,
    ...props,
  } as Props;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // for all available options: https://www.embla-carousel.com/api/options/
  const options = {
    loop: true,
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section>
      <div className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
            <p className="md:text-md">{description}</p>
          </div>
          <Carousel setApi={setApi} opts={options} className="overflow-hidden">
            <div className="relative">
              <CarouselContent className="ml-0">
                {images.map((image, index) => (
                  <CarouselItem key={`${image.src}-${index}`} className="px-0 md:px-16 lg:px-28">
                    <div className="relative w-full pt-[66.66%]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="absolute inset-0 size-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden bg-white md:flex md:size-12 lg:size-14" />
              <CarouselNext className="hidden bg-white md:flex md:size-12 lg:size-14" />
            </div>
            <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={clsx("relative mx-[3px] inline-block size-2 rounded-full", {
                    "bg-black": current === index + 1,
                    "bg-neutral-darker/40": current !== index + 1,
                  })}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

const Gallery15Defaults: Gallery15Props = {
  heading: "Image Gallery",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  images: [
    {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image 1",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image 2",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image 3",
    },
  ],
};
