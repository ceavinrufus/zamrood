"use client";

import { fetchProducts } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";

export default function Products() {
  const { data, error, isFetched } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (error) return <h2>{error.message}</h2>;
  if (data)
    return (
      <div className="">
        <h1>{JSON.stringify(data)}</h1>
      </div>
    );
}
