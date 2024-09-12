"use client";

import React, { useState } from "react";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps, ImageProps } from "@relume_io/relume-ui";
import { RxCross2 } from "react-icons/rx";

type Props = {
  heading: string;
  description: string;
  image: ImageProps;
  button: ButtonProps;
};

export type Banner2Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Banner2 = (props: Banner2Props) => {
  const { heading, description, image, button } = {
    ...Banner2Defaults,
    ...props,
  } as Props;

  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <section className="px-[5%]">
      <div className="container relative flex flex-col items-stretch justify-start border border-black bg-white p-4 md:flex-row md:items-center md:px-4 md:py-3">
        <div className="mb-4 mr-7 flex flex-1 items-start md:mb-0 md:mr-8 md:items-center">
          <img src={image.src} alt={image.alt} className="mr-4 hidden size-8 flex-none lg:block" />
          <div>
            <h2 className="font-semibold">{heading}</h2>
            <p className="text-sm">{description}</p>
          </div>
        </div>
        <div>
          <Button
            variant={button.variant}
            size={button.size}
            iconRight={button.iconRight}
            iconLeft={button.iconLeft}
          >
            Button
          </Button>
        </div>
        <button className="absolute right-2 top-2 ml-4 md:static">
          <RxCross2 className="size-8 p-1" onClick={() => setIsVisible(false)} />
        </button>
      </div>
    </section>
  );
};

export const Banner2Defaults: Banner2Props = {
  heading: "Medium length banner heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  image: {
    src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
    alt: "Relume logo",
  },
  button: {
    size: "sm",
  },
};
