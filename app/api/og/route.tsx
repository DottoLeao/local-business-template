import { ImageResponse } from "next/og";
import { business } from "@/data/business.config";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: business.theme.background,
          color: business.theme.foreground,
          padding: "64px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            opacity: 0.55,
          }}
        >
          {business.suburb} · {business.city}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, maxWidth: 900 }}>
            {business.name}
          </div>
          <div
            style={{
              fontSize: 28,
              fontFamily: "sans-serif",
              opacity: 0.75,
              maxWidth: 800,
            }}
          >
            {business.tagline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 24,
            fontFamily: "sans-serif",
          }}
        >
          <span style={{ color: business.theme.accent }}>★</span>
          <span>
            {business.rating.toFixed(1)} · {business.reviewCount} Google reviews
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
