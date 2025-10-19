import { WELCOME_MESSAGE, useCounterStore, ThemeProvider, useThemeStore } from '@learning/shared';
import { Button, Text, View } from 'tamagui';
import { StatusBar } from 'expo-status-bar';
import { ThemeToggle } from './components/ThemeToggle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createJSONStorage } from 'zustand/middleware';
import { useEffect } from 'react';

// Configure storage for mobile
const mobileStorage = createJSONStorage(() => AsyncStorage);

export default function App() {
    const { count, increment, decrement, reset } = useCounterStore();
    const { theme, setTheme } = useThemeStore();

    // Load theme from AsyncStorage on app start
    useEffect(() => {
        const loadTheme = async () => {
            try {
                const savedTheme = await AsyncStorage.getItem('theme-storage');
                if (savedTheme) {
                    const parsed = JSON.parse(savedTheme);
                    if (parsed.state?.theme) {
                        setTheme(parsed.state.theme);
                    }
                }
            } catch (error) {
                console.log('Error loading theme:', error);
            }
        };
        loadTheme();
    }, [setTheme]);

    // Save theme to AsyncStorage when it changes
    useEffect(() => {
        const saveTheme = async () => {
            try {
                await AsyncStorage.setItem('theme-storage', JSON.stringify({ state: { theme } }));
            } catch (error) {
                console.log('Error saving theme:', error);
            }
        };
        saveTheme();
    }, [theme]);

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

                <StatusBar style="auto" />
            </View>
        </ThemeProvider>
    );
}