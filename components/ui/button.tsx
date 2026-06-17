import * as Haptics from "expo-haptics";
import { useState } from "react";
import { Pressable, Text } from "react-native";

import { useTheme } from "@/components/theme/theme-provider";
import { Icon, type IconName } from "@/components/ui/icon";

// Primary action button. iOS = rounded rectangle (r14, h52); Android = M3 pill (r999, h56).
// Icon + label sit in a single horizontal row on the app's terracotta (t.primary).
export function PrimaryButton({
  label,
  icon,
  onPress,
  full = true,
}: {
  label: string;
  icon?: IconName;
  onPress?: () => void;
  full?: boolean;
}) {
  const { t } = useTheme();
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    if (t.ios) Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress?.();
  };

  return (
    <Pressable
      onPress={handlePress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      android_ripple={{ color: "rgba(255,255,255,0.18)" }}
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          alignSelf: full ? "stretch" : "flex-start",
          height: t.ios ? 52 : 56,
          paddingHorizontal: 24,
          borderRadius: t.ios ? 14 : 999,
          borderCurve: "continuous",
          backgroundColor: t.primary,
        },
        t.android ? { boxShadow: "0 1px 3px rgba(0,0,0,0.2)" } : null,
        pressed ? { opacity: 0.85 } : null,
      ]}
    >
      {icon ? <Icon name={icon} size={22} color={t.onPrimary} weight="medium" /> : null}
      <Text style={{ color: t.onPrimary, fontSize: 17, fontWeight: "600" }}>{label}</Text>
    </Pressable>
  );
}
