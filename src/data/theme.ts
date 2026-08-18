import type { ThemeConfig } from "@/types/theme";

export const theme = {
  mode: "dark",
  tokens: {
    pageBg: "#0E1428",
    surface1: "#16203A",
    surface2: "#1E2B4A",
    surface3: "#28385C",
    surfaceInverse: "#E6D9B8",
    textPrimary: "#E6E2D6",
    textMuted: "#9AA3B8",
    textInverse: "#0E1428",
    textOnAccentPrimary: "#FFFFFF",
    textLink: "#E07A82",
    focusRing: "#FFB061",
    line: "#2A3A5C",
    lineStrong: "#3D5278",
    accentPrimary: "#B8242C",
    accentSecondary: "#D4B26A",
    accentBright: "#FFB061",
    statusConfirmed: "#D4B26A",
    statusCaution: "#E0A23C",
    statusUnknown: "#6E7A92",
  },
  typography: {
    headingFamily:
      "'Cinzel', 'IM Fell English SC', 'Times New Roman', Georgia, serif",
    bodyFamily:
      "'EB Garamond', 'Crimson Text', 'Source Serif Pro', Georgia, 'Times New Roman', serif",
    headingWeight: 700,
  },
  shape: {
    radius: "6px",
    borderWidth: "1px",
    shadow: "0 2px 12px rgba(8, 12, 24, 0.55)",
    hoverLift: "-2px",
  },
  density: "comfortable",
  background: {
    mode: "gradient",
    overlay: 0.18,
    position: "top center",
  },
  variants: {
    home: "split-panel",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "panelled",
  },
  decoration: { motif: "organic", intensity: "low" },
} satisfies ThemeConfig;
