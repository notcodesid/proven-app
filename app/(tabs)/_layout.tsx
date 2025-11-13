import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

export default function RootLayout() {
    const scheme = useColorScheme();
    const isDark = scheme === 'dark';
  return (
    <Tabs screenOptions={{ headerShown: false,
    tabBarStyle: {
        backgroundColor: isDark ? "#111" : "#fff",
        borderTopColor: isDark ? "#222" : "#e6e6e6",
      },
      tabBarActiveTintColor: isDark ? "#4dd0e1" : "#0b62ff",
      tabBarInactiveTintColor: isDark ? "#9e9e9e" : "#777",
    }}
    >
      <Tabs.Screen name="index" options={{ title: "home" }} />
      <Tabs.Screen name="challenges" options={{ title: "challenges" }} />
      <Tabs.Screen name="profile" options={{ title: "profile" }} />
    </Tabs>
  )
}
