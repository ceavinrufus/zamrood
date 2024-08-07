"use client";

import { fetchArticles } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";

export default function Articles() {
  const { data, error, isFetched } = useQuery({
    queryKey: ["articles"],
    queryFn: fetchArticles,
  });

  if (error) return <h2>{error.message}</h2>;
  if (data)
    return (
      <div className="">
        <h1>{JSON.stringify(data)}</h1>
      </div>
    );
}
