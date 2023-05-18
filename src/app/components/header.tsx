"use client";
import { Github, Linkedin } from "lucide-react";
import React from "react";
import { Container } from "./container";
import { FadeIn } from "./fade-in";

export const Header = () => {
  return (
    <header className="py-6">
      <FadeIn>
        <Container className="flex items-center justify-between">
          <div></div>
          <div className="flex gap-4 text-white">
            <IconLink icon={<Github />} href="https://github.com" />
            <IconLink icon={<Linkedin />} href="https://linkedin.com" />
          </div>
        </Container>
      </FadeIn>
    </header>
  );
};

interface IconLinkProps {
  href: string;
  icon: React.ReactNode;
}

const IconLink: React.FC<IconLinkProps> = ({ icon, href }) => {
  return (
    <a
      className="w-12 relative h-12 p-3 rounded-full bg-gradient-to-br from-[#02FEF1]  to-[#AA01FC] flex items-center justify-center"
      href={href}
      target="_blank"
    >
      <span className="pointer-events-none relative z-20">{icon}</span>
      <div className="bg-purple-600 absolute inset-0 rounded-full opacity-0 duration-200 hover:opacity-100"></div>
    </a>
  );
};
