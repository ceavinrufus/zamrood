import Image from "next/image";
import React from "react";
import Service from "./Service";

const services = [
  {
    title: "Personalized Itineraries",
    description:
      "Our premium travel services offer tailor-made itineraries crafted to suit your unique preferences and desires.",
    icon: "/icons/service-1.svg",
  },
  {
    title: "Exclusive Experiences",
    description:
      "From private charters to behind-the-scenes tours, we offer access to unique opportunities that are designed to elevate your trip to the next level.",
    icon: "/icons/service-2.svg",
  },
  {
    title: "Best Facilities",
    description:
      "Experience the epitome of with our premium facility, designed to provide an unparalleled level of comfort and indulgence.",
    icon: "/icons/service-3.svg",
  },
];
const BeyondPremium = () => {
  return (
    <section className="p-4 lg:py-0 my-[54px] lg:my-[72px] w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-stretch gap-4 lg:gap-6">
      <div className="col-span-full text-center">
        <h1 className="font-the-signature text-dark-aqua text-[54px] lg:text-[85px] leading-5 lg:leading-10">
          Beyond Premium
        </h1>
        <span className="font-unbounded text-dark-teal font-bold uppercase text-[22px] lg:text-[32px]">
          Elevate Your Experience
        </span>
      </div>
      {services.map((service, index) => (
        <Service key={index} {...service} />
      ))}
    </section>
  );
};

export default BeyondPremium;
