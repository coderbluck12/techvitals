import React from "react";
import { Category, getCategoryMeta } from "../lib/types";

interface CategoryBadgeProps {
  category: Category;
  className?: string;
}

export default function CategoryBadge({ category, className = "" }: CategoryBadgeProps) {
  const meta = getCategoryMeta(category);
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${meta.bgColor} ${meta.textColor} ${className}`}
    >
      {meta.name}
    </span>
  );
}
