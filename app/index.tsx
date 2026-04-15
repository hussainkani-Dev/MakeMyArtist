import { router } from 'expo-router';
import { useEffect } from 'react';

export default function Index() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const isLoggedIn = false;

      router.replace(isLoggedIn ? '/(tabs)' : '/screens/login');
    }, 0); // important

    return () => clearTimeout(timeout);
  }, []);

  return null;
}
