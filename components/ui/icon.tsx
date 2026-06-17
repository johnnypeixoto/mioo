import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SymbolView, type SymbolWeight } from "expo-symbols";

// Cross-platform icon: SF Symbol on iOS, Material Symbol on Android.
// Names are the design's Material glyph keys; we map each to its SF equivalent.
type MdName = keyof typeof MaterialIcons.glyphMap;

const MAP: Record<string, { sf: string; md: MdName }> = {
  sell: { sf: "tag.fill", md: "sell" },
  add: { sf: "plus", md: "add" },
  settings: { sf: "gearshape.fill", md: "settings" },
  // object types
  pet: { sf: "pawprint.fill", md: "pets" },
  chaves: { sf: "key.fill", md: "vpn-key" },
  mochila: { sf: "backpack.fill", md: "backpack" },
  mala: { sf: "suitcase.fill", md: "luggage" },
  carteira: { sf: "wallet.bifold.fill", md: "account-balance-wallet" },
  eletronico: { sf: "laptopcomputer", md: "devices" },
  outro: { sf: "square.grid.2x2.fill", md: "category" },
};

export type IconName = keyof typeof MAP;

export function Icon({
  name,
  size = 24,
  color,
  weight = "regular",
}: {
  name: IconName;
  size?: number;
  color?: string;
  weight?: SymbolWeight;
}) {
  const entry = MAP[name];
  if (process.env.EXPO_OS === "android") {
    return <MaterialIcons name={entry.md} size={size} color={color} />;
  }
  return (
    <SymbolView
      name={entry.sf as never}
      size={size}
      tintColor={color}
      weight={weight}
      resizeMode="scaleAspectFit"
      style={{ width: size, height: size }}
    />
  );
}
