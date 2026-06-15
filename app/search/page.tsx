"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { searchArticles } from "../../lib/articles";
import { Article } from "../../lib/types";
import NewsCard from "../../components/NewsCard";
import PageLayout from "../../components/PageLayout";

function SearchResultsGrid() {
  const searchParams = useSearchParams();
  const query = searchParams ? searchParams.get("q") || "" : "";
  const [results, setResults] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function runSearch() {
      if (!query) {
        setResults([]);
        return;
      }
      setLoading(true);
      try {
        const res = await searchArticles(query);
        setResults(res);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    runSearch();
  }, [query]);

  return (
    <>
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

      {loading ? (
        <div className="py-20 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-teal-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:border-teal-400" />
          <p className="mt-4 text-sm font-medium text-neutral-500 dark:text-neutral-400">Searching stories...</p>
        </div>
      ) : query && results.length > 0 ? (
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
    </>
  );
}

export default function SearchPage() {
  return (
    <PageLayout>
      <Suspense fallback={
        <div className="py-12 text-center text-neutral-500 dark:text-neutral-400">
          Loading search content...
        </div>
      }>
        <SearchResultsGrid />
      </Suspense>
    </PageLayout>
  );
}
