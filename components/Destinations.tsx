import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ReactComponent as ChevronRightIcon } from "@/public/icons/chevron-right.svg";

const Destinations = () => {
  return (
    <section id="destinations" className="p-4 w-full max-w-7xl mx-auto">
      <div className="py-6 w-full flex flex-col sm:flex-row items-start gap-6">
        <h1 className="my-auto w-fit text-left text-dark-teal font-unbounded font-bold text-[22px] lg:text-4xl">
          Destinations
        </h1>
        <div className="w-fit flex items-center">
          <Link
            className="group w-fit inline-flex gap-4 items-center cursor-pointer"
            href="#destinations"
          >
            <ChevronRightIcon className="stroke-dark-teal group-hover:stroke-tan transition-colors ease-in-out duration-300" />
            <span className="uppercase text-base text-dark-teal group-hover:text-tan transition-colors ease-in-out duration-300">
              Explore more
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
