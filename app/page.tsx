"use client";

import { useState, useEffect } from "react";
import { getArticles, getFeaturedArticle } from "../lib/articles";
import { CATEGORIES, Article } from "../lib/types";
import HeroCard from "../components/HeroCard";
import NewsCard from "../components/NewsCard";
import PageLayout from "../components/PageLayout";

export default function Home() {
  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const articles = await getArticles();
        const featured = await getFeaturedArticle();
        setAllArticles(articles);
        setFeaturedArticle(featured || articles[0] || null);
      } catch (error) {
        console.error("Error loading articles:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  const filteredArticles =
    selectedCategory === "All"
      ? allArticles.filter((a) => a.id !== featuredArticle?.id)
      : allArticles.filter(
          (a) =>
            a.category.toLowerCase() === selectedCategory.toLowerCase() &&
            a.id !== featuredArticle?.id
        );

  return (
    <PageLayout>
      {isLoading ? (
        <div className="py-24 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-teal-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:border-teal-400" />
          <p className="mt-4 text-sm font-medium text-neutral-500 dark:text-neutral-400">Loading latest stories...</p>
        </div>
      ) : (
        <>
          {/* Hero Section */}
          {featuredArticle && (
            <section className="mb-12">
              <h2 className="mb-6 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                Featured Story
              </h2>
              <HeroCard article={featuredArticle} />
            </section>
          )}

          {/* Filter Tabs */}
          <section className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-200 pb-4 dark:border-neutral-800 gap-4">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-500/90">
                  Latest Articles
                </h2>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  Explore the latest stories and insights.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory("All")}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${
                    selectedCategory === "All"
                      ? "bg-teal-600 text-white shadow-sm"
                      : "bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-800 dark:hover:bg-neutral-800"
                  }`}
                >
                  All
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${
                      selectedCategory === cat.name
                        ? "bg-teal-600 text-white shadow-sm"
                        : "bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-800 dark:hover:bg-neutral-800"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* News Card Grid */}
          <section>
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="py-12 text-center text-neutral-500 dark:text-neutral-400">
                No articles found in this category.
              </div>
            )}
          </section>
        </>
      )}
    </PageLayout>
  );
}
