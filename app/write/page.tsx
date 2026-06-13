"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PageLayout from "../../components/PageLayout";
import { Category, CATEGORIES } from "../../lib/types";
import { saveArticle } from "../../lib/articles";

export default function WritePage() {
  const router = useRouter();
  
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [body, setBody] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [category, setCategory] = useState<Category>("Health Tech");
  const [author, setAuthor] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!title.trim() || !excerpt.trim() || !body.trim() || !author.trim()) {
      setError("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    // Use a placeholder image if not provided
    const finalCoverImage =
      coverImage.trim() ||
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80";

    const newArticle = {
      id: Date.now().toString(),
      slug,
      title,
      excerpt,
      body,
      coverImage: finalCoverImage,
      category,
      author,
      publishedAt: new Date().toISOString(),
      readTime: Math.max(1, Math.ceil(body.split(/\s+/).length / 200)), // dynamic word count read estimation
    };

    try {
      saveArticle(newArticle);
      // Redirect to homepage to see it appear in real-time
      router.push("/");
    } catch (err) {
      setError("Failed to publish the article. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <div className="mx-auto max-w-2xl py-6">
        <div className="mb-8 border-b border-neutral-100 pb-5 dark:border-neutral-900">
          <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">
            Publish New Article
          </h1>
          <p className="mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">
            Write and launch a new editorial article instantly.
          </p>
        </div>

        {error && (
          <div className="mb-6 rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-600 dark:bg-red-950/20 dark:text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. The Next Leap in Quantum Neural Nets"
              className="block w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
                className="block w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat.slug} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                Author <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="e.g. Dr. Jane Doe"
                className="block w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
              Cover Image URL
            </label>
            <input
              type="url"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              placeholder="e.g. https://images.unsplash.com/photo-..."
              className="block w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
              Excerpt <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={2}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="A brief 1-2 sentence description summarizing the article."
              className="block w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
              Content / Article Body <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={8}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Write the body of your article here. Use blank lines for paragraphs. Use ### for subheadings."
              className="block w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 rounded-xl bg-teal-600 py-3 text-sm font-semibold text-white shadow-md hover:bg-teal-500 transition-colors disabled:opacity-50 cursor-pointer dark:bg-teal-500 dark:hover:bg-teal-400"
            >
              {isSubmitting ? "Publishing..." : "Publish Article"}
            </button>
            <button
              type="button"
              onClick={() => router.push("/")}
              className="rounded-xl border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-600 hover:bg-neutral-50 transition-colors dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </PageLayout>
  );
}
