import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Adventure Wheels ATV Lonavala";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #050505 0%, #1a3d2e 50%, #0f2920 100%)",
          color: "#f5f5f0",
          fontFamily: "system-ui",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            background: "linear-gradient(90deg, #e8c547, #c9a227)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Adventure Wheels ATV
        </div>
        <div style={{ fontSize: 28, marginTop: 16, opacity: 0.9 }}>
          Lonavala Offroad Experience · Atvan
        </div>
        <div style={{ fontSize: 20, marginTop: 24, color: "#c9a227" }}>
          ATV rides in Lonavala | Premium Offroad
        </div>
      </div>
    ),
    { ...size }
  );
}
