// Design tokens — direct port of design_handoff_mioo (README "Design tokens" + src/tokens.jsx).
// Android tints surfaces from terracotta (Material 3); iOS uses neutral system grays
// with terracotta only as a tint. Android primary in dark becomes a light tone (#FFB59E).

export type Platform = "ios" | "android";
export type Scheme = "light" | "dark";
export type ThemePref = "light" | "dark" | "system";

export const brand = {
  terracotta: "#E2603F",
  terracottaDeep: "#C44C2E",
  peach: "#FFB59E",
  peachSoft: "#FFD9CE",
  cream: "#FFF1EB",
} as const;

// The font family loaded via @expo-google-fonts/fredoka — brand wordmark ONLY.
export const BRAND_FONT = "Fredoka_600SemiBold";

type Tokens = {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  bg: string;
  groupedBg: string;
  surface: string;
  surfaceHigh: string;
  field: string;
  fill: string;
  separator: string;
  outline?: string;
  outlineVariant?: string;
  text: string;
  text2: string;
  text3: string;
  barBg: string;
  barBorder: string;
  success: string;
  error: string;
  warning: string;
};

const iosLight: Tokens = {
  primary: "#E2603F", onPrimary: "#FFFFFF", primaryContainer: "#FFDCD0", onPrimaryContainer: "#5A1F0E",
  bg: "#FFFFFF", groupedBg: "#F2F2F7", surface: "#FFFFFF", surfaceHigh: "#FFFFFF", field: "#FFFFFF",
  fill: "rgba(120,120,128,0.12)", separator: "rgba(60,60,67,0.29)",
  text: "#000000", text2: "rgba(60,60,67,0.60)", text3: "rgba(60,60,67,0.30)",
  barBg: "rgba(249,249,249,0.82)", barBorder: "rgba(0,0,0,0.12)",
  success: "#2E9E6B", error: "#C5402F", warning: "#D9892A",
};

const iosDark: Tokens = {
  primary: "#FF7E5A", onPrimary: "#FFFFFF", primaryContainer: "#4A1D10", onPrimaryContainer: "#FFD9CE",
  bg: "#000000", groupedBg: "#000000", surface: "#1C1C1E", surfaceHigh: "#2C2C2E", field: "#1C1C1E",
  fill: "rgba(120,120,128,0.24)", separator: "rgba(84,84,88,0.65)",
  text: "#FFFFFF", text2: "rgba(235,235,245,0.60)", text3: "rgba(235,235,245,0.30)",
  barBg: "rgba(30,30,32,0.82)", barBorder: "rgba(255,255,255,0.12)",
  success: "#5FCB95", error: "#FF8A78", warning: "#F2B45A",
};

const androidLight: Tokens = {
  primary: "#E2603F", onPrimary: "#FFFFFF", primaryContainer: "#FFDBCF", onPrimaryContainer: "#5A1F0E",
  bg: "#FBF7F4", groupedBg: "#FBF7F4", surface: "#FFFFFF", surfaceHigh: "#FFFFFF", field: "#F4EBE5",
  fill: "#F0E5DE", separator: "rgba(0,0,0,0.08)", outline: "#85736A", outlineVariant: "#D8C2B8",
  text: "#231A15", text2: "#52443D", text3: "#85736A",
  barBg: "#FFFFFF", barBorder: "rgba(0,0,0,0.06)",
  success: "#2E9E6B", error: "#C5402F", warning: "#D9892A",
};

const androidDark: Tokens = {
  primary: "#FFB59E", onPrimary: "#5A1B08", primaryContainer: "#7A3420", onPrimaryContainer: "#FFDBCF",
  bg: "#1A1311", groupedBg: "#1A1311", surface: "#271E1A", surfaceHigh: "#322822", field: "#322822",
  fill: "#3A2E28", separator: "rgba(255,255,255,0.10)", outline: "#A08D83", outlineVariant: "#52443D",
  text: "#F1DFD7", text2: "#D8C2B8", text3: "#A08D83",
  barBg: "#211915", barBorder: "rgba(255,255,255,0.06)",
  success: "#5FCB95", error: "#FF8A78", warning: "#F2B45A",
};

// Corner radii. iOS → card 12, button 14, general 10. Android → card 16, general 16, FAB 18, pill 999.
export const radii = {
  ios: { card: 12, button: 14, field: 10, general: 10 },
  android: { card: 16, button: 999, field: 16, general: 16, fab: 18 },
} as const;

export type Theme = Tokens & {
  ios: boolean;
  android: boolean;
  dark: boolean;
  brandFont: string;
  radii: (typeof radii)["ios"] | (typeof radii)["android"];
};

export function getTheme(platform: Platform, scheme: Scheme): Theme {
  const tokens =
    platform === "ios"
      ? scheme === "dark"
        ? iosDark
        : iosLight
      : scheme === "dark"
        ? androidDark
        : androidLight;
  return {
    ...tokens,
    ios: platform === "ios",
    android: platform === "android",
    dark: scheme === "dark",
    brandFont: BRAND_FONT,
    radii: platform === "ios" ? radii.ios : radii.android,
  };
}
