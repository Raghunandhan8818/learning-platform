import React from 'react';
import { YStack } from 'tamagui';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, ActivityListingPage, mockActivities } from '@learning/shared';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <YStack f={1} bg="$background">
          <ActivityListingPage activities={mockActivities} />
        </YStack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
