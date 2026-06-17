import "react-native-reanimated";

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavThemeProvider,
  type Theme as NavTheme,
} from "@react-navigation/native";
import { Fredoka_600SemiBold, useFonts } from "@expo-google-fonts/fredoka";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { ThemeProvider, useTheme } from "@/components/theme/theme-provider";
import type { Theme } from "@/components/theme/theme";

function buildNavTheme(t: Theme): NavTheme {
  const base = t.dark ? DarkTheme : DefaultTheme;
  return {
    ...base,
    colors: {
      ...base.colors,
      primary: t.primary,
      background: t.bg,
      card: t.barBg,
      text: t.text,
      border: t.barBorder,
    },
  };
}

function RootNavigator() {
  const { t } = useTheme();
  return (
    <NavThemeProvider value={buildNavTheme(t)}>
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: t.bg } }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </NavThemeProvider>
  );
}

export default function RootLayout() {
  const [loaded] = useFonts({ Fredoka_600SemiBold });
  if (!loaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
