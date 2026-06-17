import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { MiooSymbol } from "@/components/brand/mioo-symbol";
import { useTheme } from "@/components/theme/theme-provider";

// Section 1 — Splash. Full terracotta (t.primary), white symbol + Fredoka wordmark,
// tagline + spinner at the bottom. Briefly shown, then routes to Minhas tags.
export default function Splash() {
  const { t } = useTheme();
  const insets = useSafeAreaInsets();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.replace("/mine"), 1800);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={{ flex: 1, backgroundColor: t.primary }}>
      <StatusBar hidden />

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: 22,
        }}
      >
        <MiooSymbol width={96} color="#FFFFFF" />
        <Text
          style={{
            fontFamily: t.brandFont,
            fontSize: 52,
            lineHeight: 56,
            color: "#FFFFFF",
            letterSpacing: -0.5,
          }}
        >
          mioo
        </Text>
      </View>

      <Text
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: insets.bottom + 54,
          textAlign: "center",
          color: "rgba(255,255,255,0.85)",
          fontSize: 14,
        }}
      >
        o app cuida do que é seu
      </Text>

      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: insets.bottom + 24,
          alignItems: "center",
        }}
      >
        <ActivityIndicator color="#FFFFFF" />
      </View>
    </View>
  );
}
