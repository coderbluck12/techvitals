import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-neutral-50/50 py-10 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
      <Footer />
    </>
  );
}
