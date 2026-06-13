"use client";

import { useState, useEffect } from "react";

export default function ArticleClientDetails() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      const scrollable = documentHeight - windowHeight;
      if (scrollable > 0) {
        setScrollPercent((scrollTop / scrollable) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-neutral-200 dark:bg-neutral-800">
        <div
          className="h-full bg-teal-500 transition-all duration-75"
          style={{ width: `${scrollPercent}%` }}
        />
      </div>

      {/* Floating share/copy button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={handleCopyLink}
          className="flex items-center gap-2 rounded-full bg-teal-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 dark:bg-teal-500"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186l.907-.453a3 3 0 001.378-2.091l.128-.769m-2.413 3.313l.907.453a3 3 0 011.378 2.091l.128.769m-1.764-3.138a2.25 2.25 0 11-2.184-1.984 2.25 2.25 0 012.183 1.984zm8.68 5.794a2.25 2.25 0 11-2.184-1.984 2.25 2.25 0 012.183 1.984zm0-11.588a2.25 2.25 0 11-2.184-1.984 2.25 2.25 0 012.183 1.984z"
            />
          </svg>
          {copied ? "Link Copied!" : "Share Link"}
        </button>
      </div>
    </>
  );
}
