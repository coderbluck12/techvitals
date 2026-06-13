import Link from "next/link";
import Image from "next/image";
import { Article } from "../lib/types";
import CategoryBadge from "./CategoryBadge";

interface HeroCardProps {
  article: Article;
}

export default function HeroCard({ article }: HeroCardProps) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="group relative overflow-hidden rounded-3xl bg-neutral-950 text-white shadow-2xl transition-all duration-300 hover:shadow-teal-950/20 hover:shadow-3xl">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <Link
          href={`/article/${article.slug}`}
          className="relative block aspect-[16/10] lg:aspect-auto lg:col-span-7 min-h-[420px] overflow-hidden bg-neutral-900"
        >
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-102"
          />
          {/* Creative gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-neutral-950/90" />
          <div className="absolute inset-0 bg-teal-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </Link>

        <div className="flex flex-col justify-center p-8 sm:p-10 lg:col-span-5 lg:p-12 relative z-10 bg-neutral-950/90 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none">
          <div className="mb-5 flex items-center justify-between">
            <CategoryBadge category={article.category} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-teal-400">
              Featured Editorial
            </span>
          </div>

          <h2 className="mb-4 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl leading-tight text-white group-hover:text-teal-400 transition-colors">
            <Link href={`/article/${article.slug}`}>{article.title}</Link>
          </h2>

          <p className="mb-6 text-neutral-400 text-sm sm:text-base leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-4 border-t border-neutral-900 pt-6 text-xs sm:text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-500/10 text-[11px] font-bold text-teal-400 ring-1 ring-teal-500/20">
                {article.author.charAt(0)}
              </div>
              <div>
                <span className="block text-[10px] text-neutral-500 uppercase tracking-widest">Writer</span>
                <span className="font-semibold text-neutral-200">{article.author}</span>
              </div>
            </div>
            <div className="h-8 w-px bg-neutral-900" />
            <div>
              <span className="block text-[10px] text-neutral-500 uppercase tracking-widest">Released</span>
              <span className="text-neutral-300 font-medium">{formattedDate}</span>
            </div>
            <div className="h-8 w-px bg-neutral-900" />
            <div>
              <span className="block text-[10px] text-neutral-500 uppercase tracking-widest">Length</span>
              <span className="text-neutral-300 font-medium">{article.readTime} min</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
