import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export const Article = ({
  className,
  slug,
  title,
  header,
}: {
  className?: string;
  title?: string;
  slug?: string;
  header?: React.ReactNode;
}) => {
  return (
    <Link
      href={`/blog/article/${slug}`}
      className={cn(
        "row-span-1 hover:shadow-xl transition duration-200 shadow-input bg-white border border-transparent justify-between flex flex-col",
        className
      )}
    >
      {header}
      <div className="w-full p-6 lg:p-4 bg-dark-aqua">
        <h2 className="m-0 text-cream text-base font-bold line-clamp-2">
          {title}
        </h2>
      </div>
    </Link>
  );
};
