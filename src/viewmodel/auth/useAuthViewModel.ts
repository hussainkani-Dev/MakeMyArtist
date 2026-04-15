import { router } from 'expo-router';
import { useState } from 'react';
import { loginApi, logoutApi } from '../../model/api/authApi';

export default function useAuthViewModel() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const res = await loginApi(email, password);

      if (res.success) {
        // Navigate to home
        router.replace('/(tabs)');
      }
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };
  const logout = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await logoutApi();

      if (res.success) {
        // Navigate to login
        router.replace('/screens/login');
      }
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    logout,
    loading,
    error,
  };
}
