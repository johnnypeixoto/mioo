import { Stack } from "expo-router";

import { useTheme } from "@/components/theme/theme-provider";

export default function ReadStack() {
  const { t } = useTheme();
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerTintColor: t.primary,
        headerStyle: { backgroundColor: t.barBg },
        headerTitleStyle: { color: t.text },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Ler tag", headerLargeTitle: t.ios }} />
    </Stack>
  );
}
