"use client";

import { use } from "react";
import { useSearchParams } from "next/navigation";
import { searchArticles } from "../../lib/articles";
import NewsCard from "../../components/NewsCard";
import PageLayout from "../../components/PageLayout";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams ? searchParams.get("q") || "" : "";
  const results = searchArticles(query);

  return (
    <PageLayout>
      <div className="mb-10 border-b border-neutral-200 pb-6 dark:border-neutral-800">
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-500/90">
          Search Results
        </h1>
        {query ? (
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Showing results for <span className="font-semibold text-teal-600 dark:text-teal-400">"{query}"</span>
          </p>
        ) : (
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Type something in the search bar above to begin searching.
          </p>
        )}
      </div>

      {query && results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      ) : query ? (
        <div className="py-20 text-center">
          <p className="text-neutral-500 dark:text-neutral-400">No articles matched your search. Try another query.</p>
        </div>
      ) : null}
    </PageLayout>
  );
}
