import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bright Boadu portfolio preview";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "radial-gradient(circle at top left, rgba(45,212,191,0.25), transparent 28%), radial-gradient(circle at right, rgba(96,165,250,0.22), transparent 24%), linear-gradient(180deg, #020617 0%, #0f172a 100%)",
          color: "#e2e8f0"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#99f6e4",
            fontSize: 24
          }}
        >
          Bright Boadu
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              maxWidth: "900px",
              fontSize: 76,
              lineHeight: 1.02,
              fontWeight: 700,
              letterSpacing: "-0.06em"
            }}
          >
            Building AI Systems That Solve Real Problems
          </div>
          <div
            style={{
              maxWidth: "820px",
              fontSize: 28,
              lineHeight: 1.4,
              color: "#cbd5e1"
            }}
          >
            AI Engineer, Machine Learning Specialist, and Founder of Venux AI.
          </div>
        </div>
      </div>
    ),
    size
  );
}
