import Articles from "@/components/Articles";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import { fetchProducts, fetchArticles } from "@/server/actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();

  // Prefetch products
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  // Prefetch articles
  await queryClient.prefetchQuery({
    queryKey: ["articles"],
    queryFn: fetchArticles,
  });

  return (
    <main className="font-albert-sans bg-cream text-black">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Hero />
        {/* <Products />
        <Articles /> */}
      </HydrationBoundary>
    </main>
  );
}
