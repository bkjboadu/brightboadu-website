import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, rgba(15,118,110,1) 0%, rgba(37,99,235,1) 100%)",
          color: "white",
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: "-0.08em"
        }}
      >
        BB
      </div>
    ),
    size
  );
}
