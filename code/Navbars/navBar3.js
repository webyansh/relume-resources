"use client";

import { useState } from "react";
import { Button } from "@relume_io/relume-ui";
import type { ImageProps, ButtonProps } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";

type LinkProps = {
  title: string;
  url: string;
};

type MenuLinkProps = LinkProps & {
  subLinks?: LinkProps[];
};

type Props = {
  logo: ImageProps;
  links: MenuLinkProps[];
  buttons: ButtonProps[];
};

export type Navbar3Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Navbar3 = (props: Navbar3Props) => {
  const { logo, links, buttons } = {
    ...Navbar3Defaults,
    ...props,
  } as Props;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="grid h-auto w-full grid-cols-[1fr_max-content_1fr] items-center justify-between border-b border-border-primary bg-white px-[5%] md:min-h-18">
      <button
        className="flex size-12 flex-col justify-center lg:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="my-[3px] h-0.5 w-6 bg-black lg:hidden" />
          ))}
      </button>
      <AnimatePresence>
        <motion.div
          initial="closed"
          animate={mobileMenuOpen ? "open" : "closed"}
          exit="closed"
          variants={{
            closed: {
              x: "-100%",
              opacity: 1,
              transition: { type: "spring", duration: 0.6, bounce: 0 },
              transitionEnd: {
                opacity: "var(--opacity-closed, 0%)",
                x: "var(--x-closed, -100%)",
              },
            },
            open: {
              x: 0,
              opacity: 1,
              transition: { type: "spring", duration: 0.4, bounce: 0 },
            },
          }}
          className="absolute left-0 top-0 z-50 flex h-dvh w-[90%] flex-col border-r border-border-primary bg-white px-[5%] pb-4 md:w-[80%] lg:visible lg:static lg:-ml-4 lg:flex lg:h-auto lg:w-auto lg:flex-row lg:border-none lg:px-0 lg:pb-0 lg:[--opacity-closed:100%] lg:[--x-closed:0%]"
        >
          <div className="mb-8 mt-10 flex flex-shrink-0 lg:hidden">
            <img src={logo.src} alt={logo.alt} />
          </div>
          {links.map((link, index) => (
            <div key={`${link.title}-${index}`} className="w-full lg:w-auto">
              {link.subLinks && link.subLinks.length > 0 ? (
                <NavItemDropdown subLinks={link.subLinks} title={link.title} />
              ) : (
                <a
                  href={link.url}
                  className="relative block py-3 text-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 lg:px-4 lg:py-2 lg:text-base"
                >
                  {link.title}
                </a>
              )}
            </div>
          ))}
          <div className="mt-6 lg:hidden">
            {buttons.map((button, index) => (
              <Button
                key={`${button.title}-${index}`}
                variant={button.variant}
                size={button.size}
                className="w-full"
              >
                {button.title}
              </Button>
            ))}
          </div>
        </motion.div>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
      <div className="flex min-h-16 flex-shrink-0 items-center">
        <img src={logo.src} alt={logo.alt} />
      </div>
      <div className="flex min-h-16 items-center justify-end gap-x-4">
        <div>
          {buttons.map((button, index) => (
            <Button
              key={`${button.title}-${index}`}
              variant={button.variant}
              size={button.size}
              className="px-4 py-1 md:px-6 md:py-2"
            >
              {button.title}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const NavItemDropdown = ({ title, subLinks }: { title: string; subLinks: LinkProps[] }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
      <button
        className="flex w-full items-center justify-between gap-2 py-3 text-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 lg:w-auto lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base"
        onClick={() => setDropdownOpen((prev) => !prev)}
      >
        <span>{title}</span>
        <AnimatePresence>
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
        </AnimatePresence>
      </button>
      {dropdownOpen && (
        <AnimatePresence>
          <motion.ul
            animate={dropdownOpen ? "open" : "close"}
            initial="close"
            exit="close"
            variants={{
              open: {
                visibility: "visible",
                opacity: "var(--opacity-open, 100%)",
                y: 0,
              },
              close: {
                visibility: "hidden",
                opacity: "var(--opacity-close, 0)",
                y: "var(--y-close, 0%)",
              },
            }}
            transition={{ duration: 0.3, type: "spring", bounce: 0 }}
            className="bg-white lg:absolute lg:h-auto lg:border lg:border-border-primary lg:p-2 lg:[--y-close:25%]"
          >
            {subLinks.map((subLink, index) => (
              <li
                key={`${subLink.title}-${index}`}
                className="relative whitespace-nowrap py-3 pl-[5%] align-top text-md lg:py-2 lg:pl-4 lg:pr-8 lg:text-left lg:text-base"
              >
                <a
                  href={subLink.url}
                  className="ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                >
                  {subLink.title}
                </a>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      )}
    </nav>
  );
};

const Navbar3Defaults: Navbar3Props = {
  logo: {
    src: "https://relume-assets.s3.amazonaws.com/logo-image.svg",
    alt: "Logo image",
  },
  links: [
    { title: "Link One", url: "#" },
    { title: "Link Two", url: "#" },
    {
      title: "Link Three",
      url: "#",
      subLinks: [
        { title: "Link Four", url: "#" },
        { title: "Link Five", url: "#" },
        { title: "Link Six", url: "#" },
      ],
    },
  ],
  buttons: [
    {
      title: "Button",
      size: "sm",
    },
  ],
};
