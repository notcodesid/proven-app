import { Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import * as SystemUI from "expo-system-ui";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    SystemUI.setBackgroundColorAsync("#000000");
  }, []);

  return <Stack screenOptions={{ headerShown: false }} />;
}
