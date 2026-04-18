// app/_layout.tsx

import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack, usePathname } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import "../global.css";

import Loader from "../src/components/ui/Loader";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const pathname = usePathname();   // ✅ track route
  const [loading, setLoading] = useState(false); // ✅ state added

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 600); // adjust timing if needed

    return () => clearTimeout(timer);
  }, [pathname]); // ✅ runs on every navigation

  return (
    <ThemeProvider value={DefaultTheme}>
      <>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="screens/SplashScreen" />
          <Stack.Screen name="screens/login" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="screens/locationSearchView" />
        </Stack>

        {loading && <Loader />} {/* ✅ now works */}

        <StatusBar style="auto" />
      </>
    </ThemeProvider>
  );
}