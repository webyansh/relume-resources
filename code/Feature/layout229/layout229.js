"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps, ImageProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type SectionProps = {
  image: ImageProps;
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

type Props = {
  sections: SectionProps[];
};

export type Layout229Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Layout229 = (props: Layout229Props) => {
  const { sections } = { ...props, ...Layout229Defaults };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12 lg:gap-y-16">
        {sections.map((section, index) => (
          <div
            key={`${section.heading}-${index}`}
            className="flex w-full flex-col items-center text-center"
          >
            <div className="mb-6 md:mb-8">
              <img src={section.image.src} alt={section.image.alt} />
            </div>
            <p className="mb-3 font-semibold md:mb-4">{section.tagline}</p>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              {section.heading}
            </h3>
            <p>{section.description}</p>
            <div className="mt-6 flex items-center gap-4 md:mt-8">
              {section.buttons.map((button, index) => (
                <Button
                  key={`${button.title}-${index}`}
                  variant={button.variant}
                  size={button.size}
                  iconRight={button.iconRight}
                  iconLeft={button.iconLeft}
                >
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Layout229Defaults: Layout229Props = {
  sections: [
    {
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
        alt: "Placeholder image 1",
      },
      tagline: "Tagline",
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight className="size-6" />,
        },
      ],
    },
    {
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
        alt: "Placeholder image 2",
      },
      tagline: "Tagline",
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight className="size-6" />,
        },
      ],
    },
    {
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
        alt: "Placeholder image 3",
      },
      tagline: "Tagline",
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight className="size-6" />,
        },
      ],
    },
  ],
};
