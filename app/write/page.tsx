"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import PageLayout from "../../components/PageLayout";
import { Category, CATEGORIES } from "../../lib/types";
import { saveArticle } from "../../lib/articles";

export default function WritePage() {
  const router = useRouter();
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const coverFileInputRef = useRef<HTMLInputElement>(null);
  const bodyFileInputRef = useRef<HTMLInputElement>(null);
  
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [body, setBody] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [category, setCategory] = useState<Category>("Health Tech");
  const [author, setAuthor] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isUploadingCover, setIsUploadingCover] = useState(false);
  const [isUploadingBody, setIsUploadingBody] = useState(false);

  const uploadToCloudinary = async (file: File): Promise<string> => {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    if (!cloudName) {
      throw new Error("Cloudinary cloud name is not configured. Please add NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME in your environment variables.");
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "zeststore_products");

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error?.message || "Failed to upload image to Cloudinary");
    }

    const data = await response.json();
    return data.secure_url;
  };

  const insertImageMarkdown = (url: string, caption: string) => {
    const markdownImage = `\n\n![${caption}](${url})\n\n`;
    const textarea = bodyRef.current;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = textarea.value;
      const newBody = text.substring(0, start) + markdownImage + text.substring(end);
      setBody(newBody);
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start + markdownImage.length, start + markdownImage.length);
      }, 0);
    } else {
      setBody((prev) => prev + markdownImage);
    }
  };

  const handleCoverFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingCover(true);
    setError("");
    try {
      const url = await uploadToCloudinary(file);
      setCoverImage(url);
    } catch (err: any) {
      setError(err.message || "Failed to upload cover image. Please try again.");
    } finally {
      setIsUploadingCover(false);
      if (e.target) e.target.value = "";
    }
  };

  const handleBodyFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingBody(true);
    setError("");
    try {
      const url = await uploadToCloudinary(file);
      const caption = prompt("Enter an optional image caption (or leave blank):") || "";
      insertImageMarkdown(url, caption);
    } catch (err: any) {
      setError(err.message || "Failed to upload image. Please try again.");
    } finally {
      setIsUploadingBody(false);
      if (e.target) e.target.value = "";
    }
  };

  const handleInsertImage = () => {
    const shouldUpload = confirm("Do you want to upload an image from your computer?\n\n(Select 'Cancel' if you want to enter an image URL instead)");
    if (shouldUpload) {
      bodyFileInputRef.current?.click();
    } else {
      const url = prompt("Enter the image URL:");
      if (!url) return;
      const caption = prompt("Enter an optional image caption (or leave blank):") || "";
      insertImageMarkdown(url, caption);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
      await saveArticle(newArticle);
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
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500">
                Cover Image URL
              </label>
              <button
                type="button"
                onClick={() => coverFileInputRef.current?.click()}
                disabled={isUploadingCover}
                className="flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 transition-colors cursor-pointer disabled:opacity-50"
              >
                {isUploadingCover ? (
                  <span className="flex items-center gap-1.5">
                    <svg className="animate-spin h-3.5 w-3.5 text-neutral-500" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Uploading...
                  </span>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                    Upload Cover
                  </>
                )}
              </button>
            </div>
            <input
              type="url"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              placeholder="e.g. https://images.unsplash.com/photo-..."
              className="block w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
            />
            <input
              type="file"
              ref={coverFileInputRef}
              onChange={handleCoverFileChange}
              accept="image/*"
              className="hidden"
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
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500">
                Content / Article Body <span className="text-red-500">*</span>
              </label>
              <button
                type="button"
                onClick={handleInsertImage}
                disabled={isUploadingBody}
                className="flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 transition-colors cursor-pointer disabled:opacity-50"
              >
                {isUploadingBody ? (
                  <span className="flex items-center gap-1.5">
                    <svg className="animate-spin h-3.5 w-3.5 text-neutral-500" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Uploading...
                  </span>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    Insert Image
                  </>
                )}
              </button>
            </div>
            <textarea
              required
              ref={bodyRef}
              rows={8}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Write the body of your article here. Use blank lines for paragraphs. Use ### for subheadings."
              className="block w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
            />
            <input
              type="file"
              ref={bodyFileInputRef}
              onChange={handleBodyFileChange}
              accept="image/*"
              className="hidden"
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
