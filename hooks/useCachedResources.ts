import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function useCachedResources (): boolean {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync (): Promise<void> {
      await SplashScreen.preventAutoHideAsync();
    }

    loadResourcesAndDataAsync()
      .catch((e) => { console.warn(e); })
      .finally(async () => {
        setLoadingComplete(true);
        await SplashScreen.hideAsync();
      });
  }, []);

  return isLoadingComplete;
}
