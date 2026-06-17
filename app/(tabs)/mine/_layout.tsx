import { Stack } from "expo-router";
import { Pressable, View } from "react-native";

import { MiooSymbol } from "@/components/brand/mioo-symbol";
import { useTheme } from "@/components/theme/theme-provider";
import { Icon } from "@/components/ui/icon";

function HeaderBrand() {
  const { t } = useTheme();
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: t.ios ? undefined : 48,
        height: t.ios ? undefined : 48,
        paddingLeft: t.ios ? 4 : 0,
      }}
    >
      <MiooSymbol width={t.ios ? 19 : 22} color={t.primary} />
    </View>
  );
}

function SettingsButton() {
  const { t } = useTheme();
  return (
    <Pressable
      hitSlop={8}
      style={{
        width: t.ios ? 44 : 48,
        height: t.ios ? 44 : 48,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon name="settings" size={t.ios ? 22 : 24} color={t.ios ? t.primary : t.text} />
    </Pressable>
  );
}

export default function MineStack() {
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
      <Stack.Screen
        name="index"
        options={{
          title: "Minhas tags",
          headerLargeTitle: t.ios,
          headerLeft: () => <HeaderBrand />,
          headerRight: () => <SettingsButton />,
        }}
      />
    </Stack>
  );
}
