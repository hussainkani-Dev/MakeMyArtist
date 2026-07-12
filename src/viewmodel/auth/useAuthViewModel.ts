import { router } from "expo-router";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginApi } from "../../api/authApi";

export default function useAuthViewModel() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
  try {
    setLoading(true);
    setError(null);

    const res = await loginApi(email, password);

    // ✅ Print full API response
    console.log("========== LOGIN API RESPONSE ==========");
    console.log(JSON.stringify(res, null, 2));
    console.log("========================================");

    // Save Tokens
    await AsyncStorage.setItem("accessToken", res.accessToken);
    await AsyncStorage.setItem("refreshToken", res.refreshToken);

    router.replace("/(tabs)");
  } catch (err: any) {
    console.log("========== LOGIN API ERROR ==========");
    console.log(err.response?.data || err.message);
    console.log("=====================================");

    setError(
      err.response?.data?.message || "Invalid email or password"
    );
  } finally {
    setLoading(false);
  }
};

  const logout = async () => {
    await AsyncStorage.removeItem("accessToken");
    await AsyncStorage.removeItem("refreshToken");

    router.replace("/screens/login");
  };

  return {
    login,
    logout,
    loading,
    error,
  };
}