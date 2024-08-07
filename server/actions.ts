"use server";

export async function fetchProducts() {
  const data = await fetch(
    "https://pandooin.com/api/zamrood/itinerary?highlight=true"
  );

  return data.json();
}

export async function fetchArticles() {
  const data = await fetch("https://pandooin.com/api/zamrood/article");

  return data.json();
}
