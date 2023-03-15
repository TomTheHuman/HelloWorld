import React from 'react';

import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RecoilRoot } from 'recoil';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App (): JSX.Element | null {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <RecoilRoot>
        <ApplicationProvider {...eva} theme={eva.light}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </ApplicationProvider>
      </RecoilRoot>
    </SafeAreaProvider>
  );
}
