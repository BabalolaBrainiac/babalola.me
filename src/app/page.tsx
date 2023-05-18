"use client";
import { Header } from "./components/header";
import { Container } from "./components/container";
import Link from "next/link";
import { FadeIn } from "./components/fade-in";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <AnimatePresence>
      <Container className="min-h-screen flex flex-col">
        <Header />
        <main className="text-white grow flex flex-col">
          <div className="flex flex-col grow items-center justify-center">
            <FadeIn>
              <div className="flex items-center flex-col gap-8">
                <h1 className="lg:text-7xl sm:text-6xl font-mono text-4xl flex-wrap flex gap-3">
                  <span>def </span>
                  <span className="text-transparent animate-gradient-y bg-clip-text bg-gradient-cyan-purple">
                    welcome_to_the_krypt
                  </span>
                  <span> ():</span>
                </h1>
                <div className="flex items-center gap-4 flex-col sm:flex-row w-full sm:w-fit">
                  {CTAS.map(({ href, title, isExternal }) => {
                    if (isExternal) {
                      return (
                        <div className="bg-gradient-to-br w-full sm:w-fit from-cyan-400 to-purple-700 p-[1.5px] flex rounded-full">
                          <a
                            href={href}
                            key={href}
                            className=" bg-black hover:text-cyan-300  w-full sm:w-fit text-center duration-200 py-3 px-8 rounded-full"
                          >
                            <span>{title}</span>
                          </a>
                        </div>
                      );
                    }
                    return (
                      <div className="bg-gradient-to-br from-cyan-400  w-full sm:w-fit to-purple-700 p-[1.5px] flex rounded-full">
                        <Link
                          href={href}
                          key={href}
                          className=" bg-black hover:text-cyan-300 duration-200 w-full sm:w-fit text-center py-3 px-8 rounded-full"
                        >
                          <span>{title}</span>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          </div>
        </main>
      </Container>
    </AnimatePresence>
  );
}

const CTAS = [
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Musings",
    href: "/musings",
  },
  {
    title: "Resume",
    href: "https://drive.google.com",
    isExternal: true,
  },
];
