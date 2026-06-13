export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  coverImage: string;
  category: Category;
  author: string;
  publishedAt: string;
  readTime: number;
  featured?: boolean;
}

export type Category =
  | "Health Tech"
  | "AI"
  | "Startups"
  | "Gadgets"
  | "Science";

export interface CategoryMeta {
  name: Category;
  slug: string;
  color: string;
  bgColor: string;
  textColor: string;
}

export const CATEGORIES: CategoryMeta[] = [
  {
    name: "Health Tech",
    slug: "health-tech",
    color: "green",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/40",
    textColor: "text-emerald-700 dark:text-emerald-300",
  },
  {
    name: "AI",
    slug: "ai",
    color: "blue",
    bgColor: "bg-blue-100 dark:bg-blue-900/40",
    textColor: "text-blue-700 dark:text-blue-300",
  },
  {
    name: "Startups",
    slug: "startups",
    color: "orange",
    bgColor: "bg-orange-100 dark:bg-orange-900/40",
    textColor: "text-orange-700 dark:text-orange-300",
  },
  {
    name: "Gadgets",
    slug: "gadgets",
    color: "purple",
    bgColor: "bg-purple-100 dark:bg-purple-900/40",
    textColor: "text-purple-700 dark:text-purple-300",
  },
  {
    name: "Science",
    slug: "science",
    color: "teal",
    bgColor: "bg-teal-100 dark:bg-teal-900/40",
    textColor: "text-teal-700 dark:text-teal-300",
  },
];

export function getCategoryMeta(category: Category): CategoryMeta {
  return (
    CATEGORIES.find((c) => c.name === category) ?? CATEGORIES[0]
  );
}

export function getCategoryBySlug(slug: string): CategoryMeta | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
