import { WELCOME_MESSAGE } from '@learning/shared';
import { TamaguiProvider } from '@tamagui/core';
import { config } from '@learning/shared';
import { Button, Text, View } from 'tamagui';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <View
        flex={1}
        backgroundColor="$background"
        alignItems="center"
        justifyContent="center"
        padding="$4"
      >
        <Text fontSize="$6" fontWeight="bold" marginBottom="$4" textAlign="center">
          {WELCOME_MESSAGE}
        </Text>
        <Button theme="blue" size="$4">
          Hello Mobile World!
        </Button>
        <StatusBar style="auto" />
      </View>
    </TamaguiProvider>
  );
}
