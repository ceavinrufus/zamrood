"use client";

import React from "react";
import { BentoGrid } from "./BentoGrid";
import Image from "next/image";
import { Article } from "./Article";
import { useQuery } from "@tanstack/react-query";
import { fetchArticles } from "@/server/actions";

interface ArticleProps {
  id: number;
  slug: string;
  title: string;
  header: React.ReactNode;
}

export function ArticleGrid() {
  const { data, isFetched } = useQuery({
    queryKey: ["articles"],
    queryFn: fetchArticles,
  });

  if (!isFetched) return;

  const items: ArticleProps[] = data.data.map((item: any) => ({
    id: item.id,
    slug: item.slug,
    title: item.title,
    header: (
      <ArticleImage
        src={item.featured_image}
        alt={item.featured_image_caption}
      />
    ),
  }));

  return (
    <>
      <BentoGrid>
        {items.map((item: ArticleProps, index: number) => (
          <Article
            key={index}
            slug={item.slug}
            title={item.title}
            header={item.header}
            className={index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </>
  );
}

const ArticleImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-full h-full aspect-video overflow-hidden">
    <Image
      alt={alt}
      loading="lazy"
      fill
      src={src}
      className="absolute size-full inset-0 object-cover object-center grayscale hover:grayscale-0 transition-all ease-in-out duration-300"
      style={{ color: "transparent" }}
    />
  </div>
);
