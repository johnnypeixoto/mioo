import { ScrollView, Text } from "react-native";

import { useTheme } from "@/components/theme/theme-provider";

// Section 9 — Ler tag. Placeholder until we build this screen next.
export default function ReadIndex() {
  const { t } = useTheme();
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ backgroundColor: t.bg }}
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 36,
      }}
    >
      <Text style={{ fontSize: 15, color: t.text2, textAlign: "center" }}>
        Em breve
      </Text>
    </ScrollView>
  );
}
