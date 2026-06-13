"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

function SearchInput({ placeholder, className }: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams ? searchParams.get("q") || "" : "";
  const [query, setQuery] = useState(initialQuery);

  // Sync state with URL params
  useEffect(() => {
    if (searchParams) {
      setQuery(searchParams.get("q") || "");
    }
  }, [searchParams]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const trimmed = query.trim();
      if (trimmed) {
        router.push(`/search?q=${encodeURIComponent(trimmed)}`);
      } else if (query === "" && initialQuery !== "") {
        router.push("/");
      }
    }, 400); // 400ms debounce

    return () => clearTimeout(delayDebounceFn);
  }, [query, router, initialQuery]);

  return (
    <div className={`relative ${className}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <svg
          className="h-5 w-5 text-neutral-400 dark:text-neutral-500"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="block w-full rounded-full border-0 bg-neutral-100 py-1.5 pl-10 pr-4 text-sm text-neutral-900 placeholder-neutral-500 focus:bg-white focus:ring-2 focus:ring-teal-500 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-400 dark:focus:bg-neutral-900"
        placeholder={placeholder}
      />
    </div>
  );
}

export default function SearchBar(props: SearchBarProps) {
  return (
    <Suspense fallback={
      <div className={`relative ${props.className || ""}`}>
        <input
          type="text"
          disabled
          className="block w-full rounded-full border-0 bg-neutral-100 py-1.5 pl-10 pr-4 text-sm text-neutral-400 dark:bg-neutral-800 dark:text-neutral-600"
          placeholder={props.placeholder || "Search articles..."}
        />
      </div>
    }>
      <SearchInput {...props} />
    </Suspense>
  );
}
