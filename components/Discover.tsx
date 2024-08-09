import Image from "next/image";
import Link from "next/link";
import React from "react";

const Discover = () => {
  return (
    <section
      id="discover-tailored-experiences"
      className="p-4 lg:py-0 my-[54px] lg:my-[72px] w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 space-y-4"
    >
      <div className="relative w-full lg:w-1/2 max-h-[188px] lg:max-h-64 aspect-square">
        <Image
          src={"/images/discover.png"}
          fill
          loading="lazy"
          className="object-contain object-center"
          alt="discover"
          sizes="100%"
        />
      </div>
      <div className="lg:w-1/2 flex flex-col lg:justify-center space-y-2 text-center lg:text-left">
        <h1 className="m-0 font-unbounded text-dark-teal text-[32px] font-bold">
          Discover Tailored Experiences
        </h1>
        <p className="text-sm lg:text-lg">
          Create your own journey, personalized to suit your preferences and
          interests, ensuring a once-in-a-lifetime adventure awaits.
        </p>
        <Link
          target="_blank"
          href="https://pandooin.com/id/tailor-made/create?utm_source=zamrood&utm_medium=website&utm_campaign=premium"
        >
          <button className="text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full capitalize font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 bg-dark-teal text-cream border-2 border-dark-teal hover:bg-tan hover:text-cream hover:border-tan mt-6 lg:mt-0 w-full lg:w-fit">
            Customize Your Trip
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Discover;
