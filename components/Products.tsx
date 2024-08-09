"use client";

import { fetchProducts } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";
import Itinerary from "./Itinerary";
import { Gallery } from "./AlternatingImages";

export interface ProductProps {
  day: number;
  name: string;
  partner: string;
  short_description: string;
  price: number;
  slug: string;
  related_galleries: Gallery[];
}

export default function Products() {
  const { data, isFetched } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const items: ProductProps[] = data.data.map((item: any) => ({
    day: item.itinerary_day,
    name: item.itinerary_name,
    partner: item.partner_name,
    short_description: item.itinerary_short_description,
    price: item.related_variant.itinerary_variant_pub_price,
    slug: item.itinerary_slug,
    related_galleries: item.related_galleries,
  }));

  if (!isFetched) return;

  return (
    <>
      {items.map((product: ProductProps, index: number) => (
        <Itinerary
          key={index}
          day={product.day}
          name={product.name}
          partner={product.partner}
          short_description={product.short_description}
          price={product.price}
          slug={product.slug}
          related_galleries={product.related_galleries}
        />
      ))}
    </>
  );
}
