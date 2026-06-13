import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticlesByCategory } from "../../../lib/articles";
import { getCategoryBySlug } from "../../../lib/types";
import NewsCard from "../../../components/NewsCard";
import PageLayout from "../../../components/PageLayout";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // We can import CATEGORIES here or use the hardcoded ones
  const { CATEGORIES } = await import("../../../lib/types");
  return CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const categoryMeta = getCategoryBySlug(slug);
  if (!categoryMeta) {
    return {
      title: "Category Not Found",
    };
  }
  return {
    title: `${categoryMeta.name} News | TechVitals`,
    description: `Latest articles, stories and updates in the field of ${categoryMeta.name}.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categoryMeta = getCategoryBySlug(slug);

  if (!categoryMeta) {
    notFound();
  }

  const categoryArticles = getArticlesByCategory(categoryMeta.name);

  return (
    <PageLayout>
      <div className="mb-10 border-b border-neutral-200 pb-6 dark:border-neutral-800">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
          <span className={`h-2.5 w-2.5 rounded-full bg-${categoryMeta.color}-500`} />
          Category
        </div>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-500/90">
          {categoryMeta.name}
        </h1>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Latest stories and features covering {categoryMeta.name.toLowerCase()}.
        </p>
      </div>

      {categoryArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-neutral-500 dark:text-neutral-400">No articles published in this category yet.</p>
        </div>
      )}
    </PageLayout>
  );
}
