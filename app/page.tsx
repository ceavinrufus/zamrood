import BeyondPremium from "@/components/BeyondPremium";
import Destinations from "@/components/Destinations";
import Discover from "@/components/Discover";
import Footages from "@/components/Footages";
import Hero from "@/components/Hero";
import { fetchProducts, fetchArticles } from "@/server/actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Image from "next/image";

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
        <BeyondPremium />
        <Discover />
        <section id="separator" className="p-4 w-full max-w-7xl mx-auto">
          <Image
            src={`/separator-color.svg`}
            width={1096}
            height={97}
            loading="lazy"
            className="object-contain object-center w-full"
            alt="Separator"
          />
        </section>
        <Destinations />
        <Footages />
      </HydrationBoundary>
    </main>
  );
}
