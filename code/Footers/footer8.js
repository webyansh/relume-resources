"use client";

import { Button, Input } from "@relume_io/relume-ui";
import type { ImageProps, ButtonProps, TermsAndConditionsProps } from "@relume_io/relume-ui";

type Links = {
  title: string;
  url: string;
};

type ColumnLinks = {
  links: Links[];
};

type FooterLink = {
  title: string;
  url: string;
};

type Props = {
  image: ImageProps;
  inputPlaceholder?: string;
  button: ButtonProps;
  termsAndConditions?: TermsAndConditionsProps;
  columnLinks: ColumnLinks[];
  footerText: string;
  footerLinks: FooterLink[];
};

export type Footer8Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Footer8 = (props: Footer8Props) => {
  const {
    image,
    inputPlaceholder,
    button,
    termsAndConditions,
    footerText,
    columnLinks,
    footerLinks,
  } = {
    ...Footer8Defaults,
    ...props,
  } as Props;
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-start justify-between gap-x-[8vw] gap-y-12 pb-12 sm:gap-y-10 md:gap-y-14 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:pb-20">
          <div className="flex flex-col items-start">
            <div className="mb-8">
              <img src={image.src} alt={image.alt} className="inline-block" />
            </div>
            {columnLinks.map((column, index) => (
              <ul
                key={`column-${index}`}
                className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-start gap-y-4 md:grid-flow-col md:grid-cols-[max-content] md:justify-start md:justify-items-start md:gap-x-6"
              >
                {column.links.map((link, linkIndex) => (
                  <li key={`${link.title}-${linkIndex}`} className="font-semibold">
                    <a href={link.url} className="focus-visible:outline-none">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="max-w-md lg:min-w-[25rem]">
            <p className="mb-3 font-semibold md:mb-4">Subscribe</p>
            <div className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-y-4 md:gap-4">
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
              <p className="text-xs text-text-primary">
                {termsAndConditions.text}{" "}
                <a
                  href={termsAndConditions.url}
                  className="text-link-primary underline focus-visible:outline-none"
                >
                  {termsAndConditions.linkText}
                </a>
              </p>
            )}
          </div>
        </div>

        <div className="h-px w-full bg-black" />
        <div className="flex flex-col items-start justify-start pt-6 text-sm md:flex-row md:items-center md:justify-between md:pt-8 md:text-center">
          <ul className="grid grid-flow-row grid-cols-[max-content] gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0 lg:justify-center">
            {footerLinks.map((link, index) => (
              <li
                key={`${link.title}-${index}`}
                className="underline decoration-black underline-offset-1"
              >
                <a
                  href={link.url}
                  className="ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 md:mt-0">{footerText}</p>
        </div>
      </div>
    </footer>
  );
};

const Footer8Defaults: Footer8Props = {
  image: {
    src: "https://relume-assets.s3.amazonaws.com/logo-image.svg",
    alt: "Logo image",
  },
  inputPlaceholder: "Enter your email",
  button: {
    title: "Subscribe",
    variant: "secondary",
    size: "sm",
  },
  termsAndConditions: {
    text: "By subscribing you agree to with our",
    linkText: "Privacy Policy",
    url: "#",
  },
  columnLinks: [
    {
      links: [
        { title: "Link One", url: "#" },
        { title: "Link Two", url: "#" },
        { title: "Link Three", url: "#" },
        { title: "Link Four", url: "#" },
        { title: "Link Five", url: "#" },
      ],
    },
  ],
  footerText: "© 2024 Relume. All rights reserved.",
  footerLinks: [
    { title: "Privacy Policy", url: "#" },
    { title: "Terms of Service", url: "#" },
    { title: "Cookies Settings", url: "#" },
  ],
};
