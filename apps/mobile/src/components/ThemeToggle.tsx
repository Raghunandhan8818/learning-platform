import React from 'react';
import { Button, Text, View } from 'tamagui';
import { useThemeManager } from '@learning/shared';

export const ThemeToggle: React.FC = () => {
    const { theme, isDark, setTheme, toggleTheme } = useThemeManager();

    return (
        <View flexDirection="column" alignItems="center" gap="$3">
            <Text fontSize="$4" color="$color" fontWeight="bold" fontFamily="System">
                Theme: {theme}
            </Text>

            <Button onPress={toggleTheme} size="$4">
                {isDark ? '☀️' : '🌙'}
            </Button>

            <View flexDirection="row" gap="$2" flexWrap="wrap" justifyContent="center">
                <Button
                    onPress={() => setTheme('light')}
                    size="$3"
                    borderColor="$color"
                    borderWidth={theme === 'light' ? 2 : 1}
                    backgroundColor={theme === 'light' ? '$backgroundPress' : '$background'}
                >
                    Light
                </Button>
                <Button
                    onPress={() => setTheme('dark')}
                    size="$3"
                    borderColor="$color"
                    borderWidth={theme === 'dark' ? 2 : 1}
                    backgroundColor={theme === 'dark' ? '$backgroundPress' : '$background'}
                >
                    Dark
                </Button>
            </View>
        </View>
    );
};