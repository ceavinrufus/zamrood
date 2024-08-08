"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Gallery {
  src: string;
  gallery_alt_text: string;
}

interface AlternatingImageProps {
  images: Gallery[];
}

const AlternatingImages = (props: AlternatingImageProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Ganti image dengan urutan circular
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % props.images.length
      );
    }, 3000);

    return () => clearInterval(interval); // Clear interval
  }, [props.images.length]);

  return (
    <div className="relative lg:w-1/2 max-h-[256px] lg:max-h-[327px] aspect-video">
      {props.images.map((gallery: Gallery, index: number) => (
        <Image
          src={gallery.src}
          alt={gallery.gallery_alt_text}
          fill
          loading="lazy"
          className={`absolute size-full inset-0 object-cover object-center transition-opacity ease-in-out duration-300 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            color: "transparent",
          }}
          sizes="100vw"
        />
      ))}
    </div>
  );
};

export default AlternatingImages;
