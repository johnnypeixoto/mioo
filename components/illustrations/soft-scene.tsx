import { View } from "react-native";

import { Icon, type IconName } from "@/components/ui/icon";

// Soft-layered illustration: concentric soft shapes behind a single glyph.
// Used for empty states / read tab. All primitives are circles + rounded rects.
// Port of SoftScene from design_handoff_mioo/src/icons.jsx.
export function SoftScene({
  glyph = "sell",
  size = 168,
  primary = "#E2603F",
  container = "#FFD9CE",
  halo = "#FFE9E1",
  glyphColor = "#FFFFFF",
}: {
  glyph?: IconName;
  size?: number;
  primary?: string;
  container?: string;
  halo?: string;
  glyphColor?: string;
}) {
  const s = size;
  const haloInset = 0;
  const containerInset = s * 0.13;
  const coreInset = s * 0.27;
  const coreSide = s - coreInset * 2;

  return (
    <View style={{ width: s, height: s }}>
      {/* halo */}
      <View
        style={{
          position: "absolute",
          top: haloInset,
          left: haloInset,
          right: haloInset,
          bottom: haloInset,
          borderRadius: s / 2,
          backgroundColor: halo,
          opacity: 0.6,
        }}
      />
      {/* container ring */}
      <View
        style={{
          position: "absolute",
          top: containerInset,
          left: containerInset,
          right: containerInset,
          bottom: containerInset,
          borderRadius: (s - containerInset * 2) / 2,
          backgroundColor: container,
        }}
      />
      {/* primary core with glyph */}
      <View
        style={{
          position: "absolute",
          top: coreInset,
          left: coreInset,
          right: coreInset,
          bottom: coreInset,
          borderRadius: coreSide * 0.42,
          borderCurve: "continuous",
          backgroundColor: primary,
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 10px 26px rgba(226,96,63,0.28)",
        }}
      >
        <Icon name={glyph} size={s * 0.3} color={glyphColor} weight="medium" />
      </View>
      {/* tiny orbiting accents */}
      <View
        style={{
          position: "absolute",
          top: s * 0.06,
          right: s * 0.14,
          width: s * 0.07,
          height: s * 0.07,
          borderRadius: (s * 0.07) / 2,
          backgroundColor: primary,
          opacity: 0.55,
        }}
      />
      <View
        style={{
          position: "absolute",
          bottom: s * 0.12,
          left: s * 0.05,
          width: s * 0.05,
          height: s * 0.05,
          borderRadius: (s * 0.05) / 2,
          backgroundColor: primary,
          opacity: 0.35,
        }}
      />
    </View>
  );
}
