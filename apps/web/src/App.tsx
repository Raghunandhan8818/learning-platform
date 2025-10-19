import { WELCOME_MESSAGE, useCounterStore, ThemeProvider } from '@learning/shared';
import { Button, Text, View } from 'tamagui';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
    const { count, increment, decrement, reset } = useCounterStore();

    return (
        <ThemeProvider>
            <View
                flex={1}
                backgroundColor="$background"
                alignItems="center"
                justifyContent="center"
                padding="$4"
                gap="$4"
            >
                <Text fontSize="$6" fontWeight="bold" textAlign="center" color="$color">
                    {WELCOME_MESSAGE}
                </Text>

                <Text fontSize="$8" fontWeight="bold" color="$color">
                    Count: {count}
                </Text>

                <View flexDirection="row" gap="$2">
                    <Button onPress={decrement}>-</Button>
                    <Button onPress={increment}>+</Button>
                    <Button onPress={reset}>Reset</Button>
                </View>

                <ThemeToggle />
            </View>
        </ThemeProvider>
    );
}

export default App;