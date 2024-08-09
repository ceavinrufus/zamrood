import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ReactComponent as ArrowUpRight } from "@/public/icons/arrow-up-right.svg";

const PandooinCTA = () => {
  return (
    <section
      id="pandooin-website"
      className="py-[54px] lg:pb-0 px-4 w-full max-w-7xl mx-auto"
    >
      <div
        className="w-full p-6 flex flex-col lg:flex-row space-y-2 justify-between items-center bg-[lightgray] bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.36) 0%, rgba(0, 0, 0, 0.36) 100%), url('/images/cta-background.webp')",
        }}
      >
        <Image src="/logo-white.svg" width={145.71} height={54} alt="logo" />
        <div className="flex flex-col space-y-1 justify-center lg:justify-end text-right">
          <p className="text-cream text-base text-center lg:text-right">
            Want to see other destinations? Check us out at our website
          </p>
          <Link
            target="_blank"
            className="text-cream inline-flex items-center justify-center lg:justify-end gap-2"
            href="https://pandooin.com"
          >
            <span className="text-xl font-bold underline">Pandooin.com</span>
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PandooinCTA;
