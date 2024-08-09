import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="relative flex place-items-center px-4 h-[858px] lg:h-[912px]">
      <Image
        src="/images/hero-image.png"
        priority
        style={{
          color: "transparent",
        }}
        alt="hero"
        fill
        className="absolute size-full inset-0 object-cover object-center"
        sizes="100"
      />
      <div className="absolute px-4 py-52 inset-x-0 w-full max-w-7xl mx-auto text-center lg:text-left">
        <h1 className="font-the-signature text-tan text-[86px] lg:text-[128px] leading-[0.3] lg:leading-[0.5]">
          Premium Travel
        </h1>
        <span className="font-unbounded text-cream text-2xl lg:text-[54px] font-bold">
          Beyond Expectation
        </span>
        <p className="mx-auto lg:mx-0 text-cream text-base lg:text-2xl max-w-[708px] lg:mt-3">
          Experience the finest that Indonesia has to offer with our curated
          selection of premium trips, ensuring comfort every step of the way
        </p>
        <Link href="#destination">
          <button
            type="button"
            className="text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full capitalize font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 bg-transparent text-white border-2 border-white hover:bg-tan hover:text-cream hover:border-tan mt-6"
          >
            Take Me There
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
