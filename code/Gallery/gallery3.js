"use client";

import type { ImageProps } from "@relume_io/relume-ui";

type ImageLinkProps = ImageProps & {
  url: string;
};

type Props = {
  heading: string;
  description: string;
  images: ImageLinkProps[];
};

export type Gallery3Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Gallery3 = (props: Gallery3Props) => {
  const { heading, description, images } = {
    ...Gallery3Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-6 md:grid-cols-3 md:gap-8">
          {images.map((image) => (
            <a
              key={image.src}
              href={image.url}
              className="ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
            >
              <img src={image.src} alt={image.alt} className="size-full object-cover" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery3Defaults: Gallery3Props = {
  heading: "Image Gallery",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  images: [
    {
      url: "#",
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image 1",
    },
    {
      url: "#",
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image 2",
    },
    {
      url: "#",
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image 3",
    },
  ],
};
