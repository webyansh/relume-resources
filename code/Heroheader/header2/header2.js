"use client";

import { Button, Input } from "@relume_io/relume-ui";
import type { TermsAndConditionsProps, ImageProps, ButtonProps } from "@relume_io/relume-ui";

type Props = {
  heading: string;
  description: string;
  inputPlaceholder?: string;
  button: ButtonProps;
  image: ImageProps;
  termsAndConditions?: TermsAndConditionsProps;
};

export type Header2Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Header2 = (props: Header2Props) => {
  const { heading, description, button, inputPlaceholder, image, termsAndConditions } = {
    ...Header2Defaults,
    ...props,
  } as Props;
  return (
    <header className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
            <p className="md:text-md">{description}</p>
            <div className="mb-0 mt-6 max-w-sm md:mt-8">
              <div className="mb-4 grid grid-cols-1 items-center gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-y-4 md:mt-8">
                <Input type="email" placeholder={inputPlaceholder} className="" />
                <Button
                  variant={button.variant}
                  size={button.size}
                  iconRight={button.iconRight}
                  iconLeft={button.iconLeft}
                >
                  {button.title}
                </Button>
              </div>
              {termsAndConditions && (
                <p className="text-xs text-text-primary">
                  {termsAndConditions.text}{" "}
                  <a
                    href={termsAndConditions.url}
                    className="text-link-primary underline ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                  >
                    {termsAndConditions.linkText}
                  </a>
                  .
                </p>
              )}
            </div>
          </div>
          <div>
            <img src={image.src} className="w-full object-cover" alt={image.alt} />
          </div>
        </div>
      </div>
    </header>
  );
};

const Header2Defaults: Header2Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  inputPlaceholder: "Enter your email",
  button: { title: "Sign up" },
  termsAndConditions: {
    text: "By clicking Sign Up you're confirming that you agree with our",
    linkText: "Terms and Conditions",
    url: "#",
  },
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
};
