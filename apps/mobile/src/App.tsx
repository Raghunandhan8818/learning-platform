import { WELCOME_MESSAGE , useCounterStore} from '@learning/shared';
import { TamaguiProvider } from '@tamagui/core';
import { config } from '@learning/shared';
import { Button, Text, View } from 'tamagui';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    const { count, increment, decrement, reset } = useCounterStore();
  return (
      <TamaguiProvider config={config} defaultTheme="light">
          <View
              flex={1}
              backgroundColor="$background"
              alignItems="center"
              justifyContent="center"
              padding="$4"
              gap="$4"
          >
              <Text fontSize="$6" fontWeight="bold" textAlign="center">
                  {WELCOME_MESSAGE}
              </Text>

              <Text fontSize="$8" fontWeight="bold">
                  Count: {count}
              </Text>

              <View flexDirection="row" gap="$2">
                  <Button onPress={decrement}>-</Button>
                  <Button onPress={increment}>+</Button>
                  <Button onPress={reset}>Reset</Button>
              </View>

              <StatusBar style="auto" />
          </View>
      </TamaguiProvider>
  );
}
