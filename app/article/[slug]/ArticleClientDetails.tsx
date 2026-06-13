"use client";

import { useState, useEffect } from "react";

export default function ArticleClientDetails() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [copied, setCopied] = useState(false);
  const [shareSupported, setShareSupported] = useState(false);

  useEffect(() => {
    // Detect Web Share API support
    if (typeof navigator !== "undefined" && navigator.share) {
      setShareSupported(true);
    }

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

  const handleShare = async () => {
    const shareData = {
      title: document.title,
      text: "Check out this interesting article on TechVitals!",
      url: window.location.href,
    };

    if (shareSupported) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Fallback to clipboard if share was cancelled or failed
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
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
          onClick={handleShare}
          className="flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xl transition-all duration-200 hover:-translate-y-1 hover:scale-103 active:scale-97 dark:bg-teal-500"
        >
          {shareSupported ? (
            <>
              <svg
                className="h-4.5 w-4.5"
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
              Share Story
            </>
          ) : (
            <>
              <svg
                className="h-4.5 w-4.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0013.524 2.25h-3.048a2.25 2.25 0 00-2.141 1.638l-1.048 3.5H3.75A1.5 1.5 0 002.25 8.888v10.5a1.5 1.5 0 001.5 1.5h16.5a1.5 1.5 0 001.5-1.5v-10.5a1.5 1.5 0 00-1.5-1.5h-3.538l-1.048-3.5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11.25a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {copied ? "Link Copied!" : "Copy Link"}
            </>
          )}
        </button>
      </div>
    </>
  );
}
