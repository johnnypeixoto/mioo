import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Icon, Label, NativeTabs, VectorIcon } from "expo-router/unstable-native-tabs";

import { useTheme } from "@/components/theme/theme-provider";

export default function TabsLayout() {
  const { t } = useTheme();
  return (
    <NativeTabs tintColor={t.primary}>
      <NativeTabs.Trigger name="mine">
        <Icon sf="tag.fill" androidSrc={<VectorIcon family={MaterialIcons} name="sell" />} />
        <Label>Minhas tags</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="read">
        <Icon sf="wave.3.right" androidSrc={<VectorIcon family={MaterialIcons} name="nfc" />} />
        <Label>Ler tag</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
