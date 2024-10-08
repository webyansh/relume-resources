"use client";

import type { ImageProps } from "@relume_io/relume-ui";

type Props = {
  heading: string;
  description: string;
  image: ImageProps;
};

export type Layout38Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Layout38 = (props: Layout38Props) => {
  const { heading, description, image } = {
    ...Layout38Defaults,
    ...props,
  } as Props;
  return (
    <section className="relative px-[5%]">
      <div className="container">
        <div className="flex items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-md">
            <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h3>
            <p className="text-base text-text-alternative md:text-md">{description}</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <img src={image.src} className="size-full object-cover" alt={image.alt} />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

const Layout38Defaults: Layout38Props = {
  heading: "Long heading is what you see here in this feature section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
};
