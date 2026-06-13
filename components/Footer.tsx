import Link from "next/link";
import { CATEGORIES } from "../lib/types";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-100 bg-white dark:border-neutral-900 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Creative Brand Block */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link href="/" className="group flex items-center gap-2.5">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 text-white shadow-md shadow-teal-500/20 transition-all duration-300 group-hover:rotate-6">
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
            <p className="max-w-sm text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              An editorial project reporting on the front lines of healthcare innovation, molecular biology, AI scaling systems, and boundary-pushing consumer hardware.
            </p>
          </div>

          {/* Categories Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              Channels
            </h4>
            <ul className="mt-5 space-y-3">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-sm font-semibold uppercase tracking-wider text-neutral-600 hover:text-teal-500 dark:text-neutral-400 dark:hover:text-teal-400 transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              Publication
            </h4>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm font-semibold text-neutral-600 hover:text-teal-500 dark:text-neutral-400 dark:hover:text-teal-400 transition-colors"
                >
                  About Our Mission
                </Link>
              </li>
              <li>
                <a
                  href="mailto:newsroom@techvitals.com"
                  className="text-sm font-semibold text-neutral-600 hover:text-teal-500 dark:text-neutral-400 dark:hover:text-teal-400 transition-colors"
                >
                  Editorial Guidelines
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-semibold text-neutral-600 hover:text-teal-500 dark:text-neutral-400 dark:hover:text-teal-400 transition-colors"
                >
                  Syndication & Newsroom
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 border-t border-neutral-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-neutral-400 dark:border-neutral-900 dark:text-neutral-500">
          <p>© {currentYear} TechVitals Media Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-teal-500 transition-colors">Twitter</a>
            <a href="#" className="hover:text-teal-500 transition-colors">Telegram</a>
            <a href="#" className="hover:text-teal-500 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
