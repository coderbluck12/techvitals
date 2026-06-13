"use client";

import Link from "next/link";
import { useState } from "react";
import { CATEGORIES } from "../lib/types";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-100 bg-white/70 backdrop-blur-md dark:border-neutral-900/50 dark:bg-neutral-950/75">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Creative Logo */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center gap-2.5">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 text-white shadow-md shadow-teal-500/20 transition-all duration-300 group-hover:rotate-6 group-hover:scale-105">
                <svg
                  className="h-5.5 w-5.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 h-3 w-3 animate-pulse rounded-full bg-emerald-400 ring-2 ring-white dark:ring-neutral-950" />
              </div>
              <div className="flex flex-col">
                <span className="bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-xl font-black tracking-tight text-transparent dark:from-white dark:to-neutral-300">
                  Tech<span className="text-teal-500">Vitals</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                  Intelligence Hub
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-neutral-600 dark:text-neutral-300">
            <Link
              href="/"
              className="relative py-2 transition-colors hover:text-teal-600 dark:hover:text-teal-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-teal-500 after:transition-all hover:after:w-full"
            >
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 py-2 transition-colors hover:text-teal-600 dark:hover:text-teal-400">
                Categories
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 mt-1 hidden w-52 rounded-xl border border-neutral-100 bg-white p-2.5 shadow-xl group-hover:block dark:border-neutral-800 dark:bg-neutral-900">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    className="block rounded-lg px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-700 hover:bg-neutral-50 hover:text-teal-600 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-teal-400"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/about"
              className="relative py-2 transition-colors hover:text-teal-600 dark:hover:text-teal-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-teal-500 after:transition-all hover:after:w-full"
            >
              About
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden sm:block flex-1 max-w-xs">
            <SearchBar />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-xl p-2.5 text-neutral-600 hover:bg-neutral-50 focus:outline-none dark:text-neutral-300 dark:hover:bg-neutral-900"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-100 bg-white px-4 py-5 dark:border-neutral-900 dark:bg-neutral-950">
          <div className="mb-5 sm:hidden">
            <SearchBar />
          </div>
          <nav className="flex flex-col gap-3 font-semibold">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-4 py-2.5 text-base hover:bg-neutral-50 hover:text-teal-600 dark:hover:bg-neutral-900"
            >
              Home
            </Link>
            <div className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-neutral-400">
              Categories
            </div>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg pl-8 pr-4 py-2 text-sm uppercase tracking-wider text-neutral-600 hover:bg-neutral-50 hover:text-teal-600 dark:text-neutral-400 dark:hover:bg-neutral-900"
              >
                {cat.name}
              </Link>
            ))}
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-4 py-2.5 text-base hover:bg-neutral-50 hover:text-teal-600 dark:hover:bg-neutral-900 border-t border-neutral-100 pt-4 dark:border-neutral-900"
            >
              About
            </Link>
            <Link
              href="/write"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-4 py-2.5 text-base text-teal-600 bg-teal-500/10 hover:bg-teal-500 hover:text-white transition-all dark:bg-teal-900/20 dark:text-teal-400 font-bold tracking-wide uppercase text-center mt-2"
            >
              Write Article
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
