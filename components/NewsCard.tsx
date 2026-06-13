import Link from "next/link";
import Image from "next/image";
import { Article } from "../lib/types";
import CategoryBadge from "./CategoryBadge";

interface NewsCardProps {
  article: Article;
}

export default function NewsCard({ article }: NewsCardProps) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-neutral-100 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_24px_-10px_rgba(20,184,166,0.15)] dark:bg-neutral-900/40 dark:border-neutral-800/80">
      <Link href={`/article/${article.slug}`} className="relative block aspect-[16/10] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>
      
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3.5 flex items-center justify-between">
          <CategoryBadge category={article.category} />
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            {article.readTime} min read
          </span>
        </div>
        
        <h3 className="mb-2.5 text-lg font-bold leading-snug tracking-tight text-neutral-900 group-hover:text-teal-600 transition-colors dark:text-neutral-100 dark:group-hover:text-teal-400">
          <Link href={`/article/${article.slug}`}>
            {article.title}
          </Link>
        </h3>
        
        <p className="mb-5 flex-1 text-sm leading-relaxed text-neutral-500 line-clamp-3 dark:text-neutral-400">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between border-t border-neutral-100 pt-4 text-xs dark:border-neutral-800/80">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-50 text-[10px] font-bold text-teal-600 dark:bg-teal-900/30 dark:text-teal-400">
              {article.author.charAt(0)}
            </div>
            <span className="font-semibold text-neutral-700 dark:text-neutral-300">
              {article.author}
            </span>
          </div>
          <span className="font-medium text-neutral-400 dark:text-neutral-500">
            {formattedDate}
          </span>
        </div>
      </div>
    </article>
  );
}
