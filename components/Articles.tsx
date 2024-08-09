import { ArticleGrid } from "./ArticleGrid";

export default function Articles() {
  return (
    <section
      id="article"
      className="px-4 lg:py-[72px] w-full max-w-7xl mx-auto flex flex-col space-y-6"
    >
      <div className="flex flex-col space-y-2">
        <h1 className="font-unbounded text-[22px] lg:text-4xl font-bold text-dark-aqua">
          Articles
        </h1>
        <p className="text-base lg:text-2xl text-dark-aqua">
          Our curated writings, offering something for every reader.
        </p>
      </div>
      <ArticleGrid />
    </section>
  );
}
