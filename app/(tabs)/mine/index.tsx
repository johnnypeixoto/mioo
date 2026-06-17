import { useEffect, useRef } from "react";
import { ScrollView, Text, View } from "react-native";

import { SoftScene } from "@/components/illustrations/soft-scene";
import { useTheme } from "@/components/theme/theme-provider";
import { PrimaryButton } from "@/components/ui/button";

// Section 2 — Minhas tags · vazio.
export default function MineIndex() {
  const { t } = useTheme();
  const scrollRef = useRef<ScrollView>(null);

  // iOS: 1s após a tela carregar, rola suavemente até o topo.
  useEffect(() => {
    if (!t.ios) return;
    const timer = setTimeout(() => {
      scrollRef.current?.scrollTo({ y: 0, animated: true });
    }, 300);
    return () => clearTimeout(timer);
  }, [t.ios]);

  return (
    <ScrollView
      ref={scrollRef}
      contentInsetAdjustmentBehavior="automatic"
      alwaysBounceVertical={false}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: t.bg }}
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 36,
        paddingVertical: 24
      }}
    >
      <SoftScene
        glyph="sell"
        size={172}
        primary={t.primary}
        container={t.primaryContainer}
        halo={t.dark ? "rgba(255,181,158,0.12)" : "#FFE9E1"}
        glyphColor={t.onPrimary}
      />

      <Text
        style={{
          fontSize: 22,
          lineHeight: 28,
          fontWeight: "700",
          color: t.text,
          letterSpacing: -0.3,
          marginTop: 28,
          marginBottom: 8,
          textAlign: "center",
        }}
      >
        Nada perdido por aqui
      </Text>

      <Text
        style={{
          fontSize: 15,
          lineHeight: 22,
          color: t.text2,
          textAlign: "center",
          maxWidth: 280,
        }}
      >
        Crie sua primeira tag e cole numa chave, mochila ou na coleira do pet. Se sumir, quem achar
        devolve num toque.
      </Text>

      <View style={{ marginTop: 24, marginBottom: 20, width: "100%", maxWidth: 300 }}>
        {/* TODO: abrir o sheet "Criar tag" quando essa tela existir */}
        <PrimaryButton label="Criar primeira tag" icon="add" />
      </View>
    </ScrollView>
  );
}
