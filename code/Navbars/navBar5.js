"use client";

import { useState } from "react";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps, ImageProps } from "@relume_io/relume-ui";
import { RxChevronDown, RxChevronRight } from "react-icons/rx";
import { motion } from "framer-motion";

type MegaMenuLink = {
  url: string;
  image: ImageProps;
  title: string;
  description: string;
  button?: ButtonProps;
};

type CategoryLink = {
  title: string;
  links: MegaMenuLink[];
};

type MegaMenuLinkProps = {
  categoryLinks: CategoryLink[];
  featuredSections: {
    title: string;
    links: MegaMenuLink[];
  };
  button: ButtonProps;
};

type LinkProps = {
  title: string;
  url: string;
  megaMenu?: MegaMenuLinkProps;
};

type Props = {
  logo: ImageProps;
  links: LinkProps[];
  buttons: ButtonProps[];
};

export type Navbar5Props = React.ComponentPropsWithoutRef<"section"> & Props;

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.5rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const dropDownVariants = {
  open: {
    height: "var(--height-open, 100dvh)",
    transition: { duration: 0.2 },
  },
  close: {
    height: "var(--height-closed, 0)",
    transition: { duration: 0.3 },
  },
};

export const Navbar5 = (props: Navbar5Props) => {
  const { logo, links, buttons } = {
    ...Navbar5Defaults,
    ...props,
  } as Props;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="relative flex w-full items-center justify-between border-b border-border-primary bg-white lg:min-h-18 lg:px-[5%]">
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="lg:flex">
          <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
            <img src={logo.src} alt={logo.alt} />
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <motion.div
                className="my-[3px] h-0.5 w-6 bg-black "
                animate={mobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={topLineVariants}
              />
              <motion.div
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={mobileMenuOpen ? "open" : "closed"}
                variants={middleLineVariants}
              />
              <motion.div
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={mobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={bottomLineVariants}
              />
            </button>
          </div>
          <motion.div
            animate={mobileMenuOpen ? "open" : "close"}
            initial="close"
            variants={dropDownVariants}
            className="overflow-auto px-[5%] lg:ml-6 lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
          >
            {links.map((link, index) => (
              <div key={`${link.title}-${index}`} className="first:pt-4 lg:first:pt-0">
                {link.megaMenu ? (
                  <NavItemMegaDropdown megaMenu={link.megaMenu} title={link.title} />
                ) : (
                  <a
                    href={link.url}
                    className="relative block py-3 text-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 lg:px-4 lg:py-6 lg:text-base"
                  >
                    {link.title}
                  </a>
                )}
              </div>
            ))}
            <div className="mt-6 flex w-full flex-col gap-y-4 pb-24 lg:hidden lg:pb-0">
              {buttons.map((button, index) => (
                <Button
                  className="w-full"
                  key={`${button.title}-${index}`}
                  variant={button.variant}
                  size={button.size}
                >
                  {button.title}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="hidden lg:flex lg:gap-4">
          {buttons.map((button, index) => (
            <Button key={`${button.title}-${index}`} variant={button.variant} size={button.size}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};
const NavItemMegaDropdown = ({
  title,
  megaMenu,
}: {
  title: string;
  megaMenu: MegaMenuLinkProps;
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
      <button
        className="flex w-full items-center justify-between gap-x-2 py-3 text-center text-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 lg:w-auto lg:flex-none lg:justify-start lg:px-4 lg:py-6 lg:text-base"
        onClick={() => setDropdownOpen((prev) => !prev)}
      >
        <span>{title}</span>
        <motion.div
          animate={dropdownOpen ? "rotated" : "initial"}
          variants={{
            rotated: { rotate: 180 },
            initial: { rotate: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          <RxChevronDown className="size-4" />
        </motion.div>
      </button>
      <motion.div
        animate={dropdownOpen ? "open" : "close"}
        initial="close"
        variants={{
          open: {
            visibility: "visible",
            opacity: 1,
            height: "var(--height-open, auto)",
          },
          close: {
            visibility: "hidden",
            opacity: "0",
            height: "var(--height-close, 0)",
          },
        }}
        transition={{ duration: 0.3 }}
        className="bottom-auto left-0 top-full w-full min-w-full max-w-full overflow-hidden bg-white lg:absolute  lg:w-[100vw] lg:border-b lg:border-border-primary lg:px-[5%] lg:[--height-close:auto]"
      >
        <div className="mx-auto flex size-full max-w-full items-center justify-between">
          <div className="w-full lg:flex">
            <div className="grid flex-1 gap-x-8 gap-y-6 py-4 pr-8 md:grid-cols-2 md:px-0 md:py-8 lg:py-8 lg:pr-8">
              {megaMenu.categoryLinks.map((group, index) => (
                <div
                  key={`${group.title}-${index}`}
                  className="grid auto-rows-max grid-cols-1 grid-rows-[max-content] gap-y-2 md:gap-y-4"
                >
                  <h4 className="text-sm font-semibold leading-[1.3]">{group.title}</h4>
                  {group.links.map((link, index) => (
                    <a
                      key={`${link.title}-${index}`}
                      href={link.url}
                      className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                    >
                      <div className="flex size-6 flex-col items-center justify-center">
                        <img src={link.image.src} alt={link.image.alt} />
                      </div>
                      <div className="flex flex-col items-start justify-center">
                        <h5 className="font-semibold">{link.title}</h5>
                        <p className="hidden text-sm md:block">{link.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              ))}
            </div>
            <div className="max-w-none relative flex flex-1 p-6 md:py-8 md:pl-8 md:pr-0 lg:max-w-md">
              <div className="relative z-10 grid w-full auto-cols-fr auto-rows-max grid-cols-1 grid-rows-[max-content_max-content] gap-4">
                <h4 className="text-sm font-semibold leading-[1.3]">
                  {megaMenu.featuredSections.title}
                </h4>
                <div className="grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start gap-y-2 lg:grid-rows-[auto]">
                  {megaMenu.featuredSections.links.map((link, index) => (
                    <a
                      key={`${link.title}-${index}`}
                      href={link.url}
                      className="flex auto-cols-fr grid-cols-[0.6fr_1fr] flex-col gap-x-6 py-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 md:grid"
                    >
                      <div className="relative w-full pt-[66.66%]">
                        <img
                          src={link.image.src}
                          alt={link.image.alt}
                          className="absolute inset-0 size-full object-cover"
                        />
                      </div>
                      <div className="mt-4 flex flex-col justify-start md:mt-0">
                        <h5 className="mb-1 font-semibold">{link.title}</h5>
                        <p className="text-sm">{link.description}</p>
                        {link.button && (
                          <div className="mt-1.5">
                            <Button
                              variant={link.button.variant}
                              size={link.button.size}
                              iconRight={link.button.iconRight}
                              iconLeft={link.button.iconLeft}
                              className="text-sm underline"
                            >
                              {link.button.title}
                            </Button>
                          </div>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
                <div className="flex items-center">
                  <Button
                    variant={megaMenu.button.variant}
                    size={megaMenu.button.size}
                    iconRight={megaMenu.button.iconRight}
                    iconLeft={megaMenu.button.iconLeft}
                  >
                    {megaMenu.button.title}
                  </Button>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-auto top-0 min-w-full bg-background-secondary lg:min-w-[100vw]" />
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

const Navbar5Defaults: Navbar5Props = {
  logo: {
    src: "https://relume-assets.s3.amazonaws.com/logo-image.svg",
    alt: "Logo image",
  },
  links: [
    { title: "Link One", url: "#" },
    { title: "Link Two", url: "#" },
    { title: "Link Three", url: "#" },
    {
      title: "Link Four",
      url: "#",
      megaMenu: {
        categoryLinks: [
          {
            title: "Page group one",
            links: [
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 1",
                },
                title: "Page One",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 2",
                },
                title: "Page Two",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 3",
                },
                title: "Page Three",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 4",
                },
                title: "Page Four",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
            ],
          },
          {
            title: "Page group two",
            links: [
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 5",
                },
                title: "Page Five",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 6",
                },
                title: "Page Six",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 7",
                },
                title: "Page Seven",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 8",
                },
                title: "Page Eight",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
            ],
          },
        ],
        featuredSections: {
          title: "Featured from Blog",
          links: [
            {
              url: "#",
              image: {
                src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
                alt: "Placeholder image 1",
              },
              title: "Article Title",
              description: "Lorem ipsum dolor sit amet consectetur elit",
              button: { title: "Read more", variant: "link", size: "link" },
            },
            {
              url: "#",
              image: {
                src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
                alt: "Placeholder image 2",
              },
              title: "Article Title",
              description: "Lorem ipsum dolor sit amet consectetur elit",
              button: { title: "Read more", variant: "link", size: "link" },
            },
          ],
        },
        button: {
          title: "See all articles",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight className="size-6" />,
        },
      },
    },
  ],
  buttons: [
    {
      title: "Button",
      variant: "secondary",
      size: "sm",
    },
    {
      title: "Button",
      size: "sm",
    },
  ],
};
