import {useCounterStore, WELCOME_MESSAGE} from '@learning/shared';
import {TamaguiProvider, View} from '@tamagui/core';
import { config } from '@learning/shared';
import { Button } from 'tamagui';

function App() {
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
            <span>{WELCOME_MESSAGE}</span>

            <span>
                Count: {count}
            </span>

            <View flexDirection="row" gap="$2">
                <Button onPress={decrement}>-</Button>
                <Button onPress={increment}>+</Button>
                <Button onPress={reset}>Reset</Button>
            </View>
        </View>
    </TamaguiProvider>
  );
}

export default App;
