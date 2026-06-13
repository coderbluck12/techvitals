"use client";

import { useState } from "react";
import { getArticles, getFeaturedArticle } from "../lib/articles";
import { CATEGORIES } from "../lib/types";
import HeroCard from "../components/HeroCard";
import NewsCard from "../components/NewsCard";
import PageLayout from "../components/PageLayout";

export default function Home() {
  const allArticles = getArticles();
  const featuredArticle = getFeaturedArticle() || allArticles[0];
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

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
    </PageLayout>
  );
}
