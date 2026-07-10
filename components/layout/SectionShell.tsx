import { cn } from "@/lib/utils";
import { Container } from "./Container";

type Background = "default" | "muted" | "primary" | "inverse";
type Align = "left" | "center" | "split";

const bgClass: Record<Background, string> = {
  default: "bg-background text-foreground",
  muted: "bg-muted text-foreground",
  primary: "bg-primary text-primary-foreground",
  inverse: "bg-foreground text-background",
};

export function SectionShell({
  id,
  children,
  background = "default",
  align = "left",
  overlap = false,
  containerWidth = "default",
  className,
  containerClassName,
}: {
  id?: string;
  children: React.ReactNode;
  background?: Background;
  align?: Align;
  overlap?: boolean;
  containerWidth?: "narrow" | "default" | "wide" | "full";
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-16 sm:py-24",
        bgClass[background],
        overlap && "-mt-12 sm:-mt-20",
        align === "center" && "text-center",
        className,
      )}
    >
      <Container width={containerWidth} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
