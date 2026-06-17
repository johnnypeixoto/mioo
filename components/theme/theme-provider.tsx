import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, use, useEffect, useState } from "react";
import { useColorScheme } from "react-native";

import { getTheme, type Platform, type Scheme, type Theme, type ThemePref } from "./theme";

const PLATFORM: Platform = process.env.EXPO_OS === "android" ? "android" : "ios";
const PREF_KEY = "mioo:themePref";

type ThemeContextValue = {
  t: Theme;
  platform: Platform;
  scheme: Scheme;
  pref: ThemePref;
  setPref: (pref: ThemePref) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const system = useColorScheme();
  const [pref, setPrefState] = useState<ThemePref>("system");

  useEffect(() => {
    AsyncStorage.getItem(PREF_KEY).then((v) => {
      if (v === "light" || v === "dark" || v === "system") setPrefState(v);
    });
  }, []);

  const setPref = (next: ThemePref) => {
    setPrefState(next);
    AsyncStorage.setItem(PREF_KEY, next);
  };

  const scheme: Scheme = pref === "system" ? (system === "dark" ? "dark" : "light") : pref;
  const t = getTheme(PLATFORM, scheme);

  return (
    <ThemeContext value={{ t, platform: PLATFORM, scheme, pref, setPref }}>
      {children}
    </ThemeContext>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = use(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
