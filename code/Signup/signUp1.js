"use client";

import { useState } from "react";
import { Button, Input, Label } from "@relume_io/relume-ui";
import type { ImageProps, ButtonProps } from "@relume_io/relume-ui";
import { BiLogoGoogle } from "react-icons/bi";

type Props = {
  logo: ImageProps;
  loginText: string;
  loginLink: {
    text: string;
    url: string;
  };
  title: string;
  description: string;
  signUpButton: ButtonProps;
  signUpWithGoogleButton: ButtonProps;
  footerText: string;
};

export type Signup1Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Signup1 = (props: Signup1Props) => {
  const {
    logo,
    loginText,
    loginLink,
    title,
    description,
    signUpButton,
    signUpWithGoogleButton,
    footerText,
  } = {
    ...Signup1Defaults,
    ...props,
  } as Props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <section className="px-[5%]">
      <div className="relative flex min-h-svh flex-col items-stretch justify-center overflow-auto py-24 lg:pb-24 lg:pt-16">
        <div className="absolute bottom-auto left-0 right-0 top-0 flex h-16 w-full items-center justify-between md:h-18">
          <div>
            <img src={logo.src} alt={logo.alt} />
          </div>
          <div className="inline-flex gap-x-1">
            <p className="hidden md:block">{loginText}</p>
            <a
              href={loginLink.url}
              className="underline ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
            >
              {loginLink.text}
            </a>
          </div>
        </div>
        <div className="container max-w-sm">
          <div className="mb-6 text-center md:mb-8">
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{title}</h1>
            <p className="md:text-md">{description}</p>
          </div>
          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <div className="grid w-full items-center">
              <Label htmlFor="name" className="mb-2">
                Name*
              </Label>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2">
                Email*
              </Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="password" className="mb-2">
                Password*
              </Label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="grid-col-1 grid gap-4">
              <Button
                variant={signUpButton.variant}
                size={signUpButton.size}
                iconLeft={signUpButton.iconLeft}
                iconRight={signUpButton.iconRight}
              >
                {signUpButton.title}
              </Button>
              <Button
                variant={signUpWithGoogleButton.variant}
                size={signUpWithGoogleButton.size}
                iconLeft={signUpWithGoogleButton.iconLeft}
                iconRight={signUpWithGoogleButton.iconRight}
                className="gap-x-3"
              >
                {signUpWithGoogleButton.title}
              </Button>
            </div>
          </form>
        </div>
        <footer className="absolute bottom-0 left-0 right-0 top-auto flex h-16 w-full items-center justify-center md:h-18">
          <p className="text-sm">{footerText}</p>
        </footer>
      </div>
    </section>
  );
};

const Signup1Defaults: Signup1Props = {
  logo: {
    src: "https://relume-assets.s3.amazonaws.com/logo-image.svg",
    alt: "Logo text",
  },
  loginText: "Already have an account?",
  loginLink: {
    text: "Log In",
    url: "/login",
  },
  title: "Sign Up",
  description: "Lorem ipsum dolor sit amet adipiscing elit.",
  signUpButton: {
    title: "Sign up",
  },
  signUpWithGoogleButton: {
    variant: "secondary",
    title: "Sign up with Google",
    iconLeft: <BiLogoGoogle className="size-6" />,
  },
  footerText: "© 2024 Relume",
};
