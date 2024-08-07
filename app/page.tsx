import Articles from "@/components/Articles";
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
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HydrationBoundary state={dehydrate(queryClient)}>
        {/* <Products />
        <Articles /> */}
      </HydrationBoundary>
    </main>
  );
}
