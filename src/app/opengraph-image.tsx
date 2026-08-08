import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";
import { ogLogoDataUri } from "./og-logo";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #0a1124 0%, #14434f 55%, #0891b2 120%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top row */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "20px",
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ogLogoDataUri}
              width={56}
              height={56}
              alt=""
              style={{ objectFit: "contain" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "34px", fontWeight: 800 }}>
              S.B. Global Workforce
            </span>
            <span
              style={{
                fontSize: "18px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
              }}
            >
              Overseas Recruitment
            </span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <span
            style={{
              fontSize: "68px",
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: "900px",
            }}
          >
            Connecting the right people with the right jobs
          </span>
          <span
            style={{
              fontSize: "28px",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "820px",
            }}
          >
            Trusted overseas manpower recruitment for the Gulf — screening,
            visas &amp; deployment, end to end.
          </span>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "22px",
            color: "rgba(255,255,255,0.65)",
          }}
        >
          <span>🇸🇦 🇦🇪 🇶🇦 🇰🇼 🇴🇲 🇧🇭</span>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>|</span>
          <span>Muzaffarpur, Bihar · India</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
