import Link from "next/link";
import React from "react";
import AlternatingImages from "./AlternatingImages";
import { ProductProps } from "./Products";

const Itinerary = (props: ProductProps) => {
  // Untuk convert harga ke format IDR
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",

    // minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <div className="py-4 lg:py-[72px] w-full flex flex-col lg:odd:flex-row lg:flex-row-reverse gap-4 lg:gap-6 items-stretch">
      <div className="relative lg:w-1/2 max-h-[256px] lg:max-h-[327px] aspect-video">
        <AlternatingImages images={props.related_galleries.slice(0, 2)} />
      </div>
      <div className="lg:w-1/2 flex flex-col justify-between space-y-2 lg:space-y-4 text-center lg:text-left">
        {/* Primary Info */}
        <div className="w-full flex flex-col space-y-2">
          <span className="text-left text-xs lg:text-base text-dark-teal">
            {props.day} DAYS {props.day - 1} NIGHTS
          </span>
          <strong className="text-left text-dark-aqua text-base lg:text-4xl font-bold line-clamp-2 font-unbounded">
            {props.name}
          </strong>
          <span
            className="text-left text-dark-teal text-sm lg:text-base line-clamp-1 font-bold"
            title="Organized by Pandooin"
          >
            Organized by {props.partner}
          </span>
          <p className="text-left text-sm lg:text-base text-dark-teal line-clamp-4">
            {props.short_description}
          </p>
        </div>
        {/* Price */}
        <div className="mt-auto w-full inline-flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-left text-dark-teal text-xs lg:text-base">
              Start from
            </span>
            <span className="text-left font-unbounded text-dark-aqua text-lg lg:text-[28px] font-medium">
              {formatter.format(props.price)}
            </span>
          </div>
          <Link href={`/destination/${props.slug}`}>
            <button
              type="button"
              className="text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full capitalize font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 bg-transparent text-dark-teal border-2 border-dark-teal hover:bg-dark-teal hover:text-cream hover:border-dark-teal"
            >
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
