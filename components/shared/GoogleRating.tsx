import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function GoogleRating({
  rating,
  reviewCount,
  className,
  compact = false,
}: {
  rating: number;
  reviewCount: number;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-sm",
        className,
      )}
    >
      <span className="inline-flex items-center gap-1 font-medium">
        <Star className="size-4 fill-current text-[var(--business-accent)]" />
        {rating.toFixed(1)}
      </span>
      {!compact && (
        <span className="opacity-70">
          · {reviewCount} Google reviews
        </span>
      )}
    </div>
  );
}
