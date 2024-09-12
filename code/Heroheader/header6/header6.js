"use client";

import { Button, Input } from "@relume_io/relume-ui";
import type { ImageProps, TermsAndConditionsProps, ButtonProps } from "@relume_io/relume-ui";

type Props = {
  heading: string;
  description: string;
  inputPlaceholder?: string;
  button: ButtonProps;
  image: ImageProps;
  termsAndConditions?: TermsAndConditionsProps;
};

export type Header6Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Header6 = (props: Header6Props) => {
  const { heading, description, button, inputPlaceholder, image, termsAndConditions } = {
    ...Header6Defaults,
    ...props,
  } as Props;
  return (
    <header className="relative px-[5%]">
      <div className="container">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              {heading}
            </h1>
            <p className="text-base text-text-alternative md:text-md">{description}</p>
            <div className="mb-0 mt-6 max-w-sm md:mt-8">
              <div className="mb-4 grid grid-cols-1 items-center gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-y-4 md:mt-8">
                <Input type="email" placeholder={inputPlaceholder} />
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
                <p className="text-xs text-text-alternative">
                  {termsAndConditions.text}{" "}
                  <a
                    href={termsAndConditions.url}
                    className="text-text-alternative underline ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                  >
                    {termsAndConditions.linkText}
                  </a>
                  .
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <img src={image.src} className="size-full object-cover" alt={image.alt} />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </header>
  );
};

const Header6Defaults: Header6Props = {
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
