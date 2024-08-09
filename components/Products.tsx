"use client";

import { fetchProducts } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";
import Itinerary, { ProductProps } from "./Itinerary";

export default function Products() {
  const { data, isFetched } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (!isFetched) return;

  return (
    <>
      {data.data.map((product: ProductProps, index: number) => (
        <Itinerary key={index} itinerary={product} />
      ))}
    </>
  );
}
