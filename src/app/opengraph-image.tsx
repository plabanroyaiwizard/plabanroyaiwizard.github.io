import { ImageResponse } from "next/og";
import { hero, person } from "@/content/profile";

export const alt = `${person.name} · ${person.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #121218 0%, #1d1b3a 60%, #0f2a3a 100%)",
          color: "#f5f5fa",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "#8b8cf6",
              color: "#121218",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            {person.initials}
          </div>
          <div style={{ fontSize: 30, color: "#b9b9d6" }}>{person.role}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>{person.name}</div>
          <div style={{ fontSize: 36, color: "#cfcfe6", maxWidth: 1000 }}>
            {`${hero.headline} ${hero.headlineAccent}`}
          </div>
        </div>
        <div style={{ fontSize: 24, color: "#8b8cf6" }}>{person.location}</div>
      </div>
    ),
    size,
  );
}
