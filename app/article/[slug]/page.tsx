import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getArticleBySlug, getRelatedArticles } from "../../../lib/articles";
import NewsCard from "../../../components/NewsCard";
import PageLayout from "../../../components/PageLayout";
import CategoryBadge from "../../../components/CategoryBadge";
import ArticleClientDetails from "./ArticleClientDetails";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { getArticles } = await import("../../../lib/articles");
  const articles = await getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) {
    return {
      title: "Article Not Found",
    };
  }
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
      images: [
        {
          url: article.coverImage,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.coverImage],
    },
  };
}

function parseInlineStyles(text: string) {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold text-neutral-900 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={index} className="italic text-neutral-800 dark:text-neutral-200">
          {part.slice(1, -1)}
        </em>
      );
    }
    return part;
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = await getRelatedArticles(article);
  const formattedDate = new Date(article.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <PageLayout>
      {/* Article client header details (includes reading progress bar) */}
      <ArticleClientDetails />

      <article className="mx-auto max-w-3xl">
        {/* Header */}
        <header className="mb-8">
          <div className="mb-4">
            <CategoryBadge category={article.category} />
          </div>
          <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-500/90 sm:text-4xl md:text-5xl leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 border-y border-neutral-200 py-4 dark:border-neutral-800 text-sm text-neutral-600 dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-neutral-800 dark:text-neutral-200">{article.author}</span>
              <span>•</span>
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>{article.readTime} min read</span>
            </div>
          </div>
        </header>

        {/* Feature Image */}
        <div className="relative mb-10 aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Body Text */}
        <div className="prose prose-teal max-w-none dark:prose-invert">
          {article.body.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("###")) {
              return (
                <h3 key={index} className="text-xl font-bold mt-8 mb-4 text-neutral-900 dark:text-neutral-500/90">
                  {paragraph.replace("###", "").trim()}
                </h3>
              );
            }
            if (paragraph.startsWith("-")) {
              return (
                <ul key={index} className="list-disc pl-5 my-4 space-y-1">
                  {paragraph.split("\n").map((li, i) => (
                    <li key={i}>{parseInlineStyles(li.replace("-", "").trim())}</li>
                  ))}
                </ul>
              );
            }
            // Ordered lists or key value checks
            if (/^\d+\./.test(paragraph)) {
              return (
                <ol key={index} className="list-decimal pl-5 my-4 space-y-2">
                  {paragraph.split("\n").map((li, i) => (
                    <li key={i}>{parseInlineStyles(li.replace(/^\d+\.\s*/, "").trim())}</li>
                  ))}
                </ol>
              );
            }
            // Markdown image block parser: ![Alt text](url)
            const imgMatch = paragraph.trim().match(/^!\[(.*?)\]\((.*?)\)$/);
            if (imgMatch) {
              const alt = imgMatch[1];
              const src = imgMatch[2];
              return (
                <div key={index} className="my-8 overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50 p-2 dark:border-neutral-800 dark:bg-neutral-900/50">
                  <img
                    src={src}
                    alt={alt || "Article image"}
                    className="w-full h-auto rounded-xl object-cover max-h-[500px]"
                    loading="lazy"
                  />
                  {alt && (
                    <span className="mt-2.5 block text-center text-xs font-medium text-neutral-500 dark:text-neutral-400">
                      {alt}
                    </span>
                  )}
                </div>
              );
            }
            return (
              <p key={index} className="mb-6 text-neutral-700 dark:text-neutral-300 leading-relaxed text-base sm:text-lg">
                {parseInlineStyles(paragraph)}
              </p>
            );
          })}
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="mt-16 border-t border-neutral-200 pt-10 dark:border-neutral-800">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-500/90">
            Related Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      )}
    </PageLayout>
  );
}
