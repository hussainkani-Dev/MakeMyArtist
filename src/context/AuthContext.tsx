import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: any) {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const accessToken = await AsyncStorage.getItem("accessToken");
    setToken(accessToken);
    setLoading(false);
  };

  const signIn = async (accessToken: string) => {
  await AsyncStorage.setItem("accessToken", accessToken);
  setToken(accessToken);
};

  const signOut = async () => {
  await AsyncStorage.removeItem("accessToken");
  await AsyncStorage.removeItem("refreshToken");
  setToken(null);
};

  return (
    <AuthContext.Provider
      value={{
        token,
        loading,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);