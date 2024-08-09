import Image from "next/image";
import React from "react";

interface ServiceProps {
  title: string;
  description: string;
  icon: string;
}

const Service = (props: ServiceProps) => {
  return (
    <div className="flex h-full flex-col justify-start items-stretch text-center">
      <Image
        className="mx-auto lg:p-[14px]"
        src={props.icon}
        alt={props.title}
        width={128}
        height={128}
      />
      <h2 className="text-dark-aqua text-base text-bold lg:text-2xl font-bold uppercase lg:mt-4">
        {props.title}
      </h2>
      <p className="text-sm lg:text-base">{props.description}</p>
    </div>
  );
};

export default Service;
