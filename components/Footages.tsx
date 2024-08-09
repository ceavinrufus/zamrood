import React from "react";
import AlternatingImages from "./AlternatingImages";
import Image from "next/image";

const footages = [
  {
    src: "/images/footages/footage-1.png",
    alt: "Footage 1",
  },
  {
    src: "/images/footages/footage-2.png",
    alt: "Footage 2",
  },
  {
    src: "/images/footages/footage-3.png",
    alt: "Footage 3",
  },
  {
    src: "/images/footages/footage-4.png",
    alt: "Footage 4",
  },
  {
    src: "/images/footages/footage-5.png",
    alt: "Footage 5",
  },
  {
    src: "/images/footages/footage-6.png",
    alt: "Footage 6",
  },
];

const Footages = () => {
  return (
    <section className="bg-tan lg:mt-[72px]">
      <div className="pt-12 p-9 lg:py-[72px] lg:pt-[84px] w-full max-w-7xl mx-auto lg:text-left flex flex-col space-y-6">
        <h1 className="font-the-signature text-[52px] lg:text-[72px] text-dark-teal">
          Luxury Footages
        </h1>
        <div className="block lg:hidden relative w-full aspect-[356/256]">
          <AlternatingImages images={footages} />
        </div>
        <div className="hidden w-full lg:grid grid-cols-3 gap-6">
          {footages.map((footage, index) => (
            <>
              <div
                key={index}
                className="relative w-full aspect-[356/256] cursor-pointer"
              >
                <Image
                  src={footage.src}
                  alt={footage.alt || "footage"}
                  loading="lazy"
                  fill
                  className="absolute size-full inset-0 first-letter:object-cover object-center"
                  style={{
                    color: "transparent",
                  }}
                  sizes="100%"
                />
              </div>
              {/* Generate separator setelah image ke kelipatan 3, kecuali image terakhir */}
              {(index + 1) % 3 === 0 && index != footages.length - 1 && (
                <div className="col-span-full">
                  <Image
                    src={`/separator-white.svg`}
                    width={1096}
                    height={97}
                    loading="lazy"
                    className="object-contain object-center w-full"
                    alt="Separator"
                  />
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footages;
