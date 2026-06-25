import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack, usePathname } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import "../global.css";

import Loader from "../src/components/ui/Loader";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={DefaultTheme}>
        <BottomSheetModalProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="screens/SplashScreen" />
            <Stack.Screen name="screens/EmailVerification" />
            <Stack.Screen name="screens/login" />
            <Stack.Screen name="screens/SignUp" />
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="screens/locationSearchView" />
          </Stack>

          {loading && <Loader />}

          <StatusBar style="auto" />
        </BottomSheetModalProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}