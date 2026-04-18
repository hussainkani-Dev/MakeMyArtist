// \MakeMyArtist\app\index.tsx

import { router } from 'expo-router';
import { useEffect } from 'react';

export default function Index() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/screens/SplashScreen'); // 👈 go to splash first
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return null;
}
