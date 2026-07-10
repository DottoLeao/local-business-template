import { cn } from "@/lib/utils";

type ContainerWidth = "narrow" | "default" | "wide" | "full";

const widthClass: Record<ContainerWidth, string> = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
  full: "max-w-none",
};

export function Container({
  children,
  width = "default",
  className,
}: {
  children: React.ReactNode;
  width?: ContainerWidth;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        widthClass[width],
        className,
      )}
    >
      {children}
    </div>
  );
}
