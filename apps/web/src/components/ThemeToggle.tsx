import React from 'react';
import { Button, Text, View } from 'tamagui';
import { useThemeManager } from '@learning/shared';

export const ThemeToggle: React.FC = () => {
    const { theme, isDark, setTheme, toggleTheme } = useThemeManager();

    return (
        <View flexDirection="row" alignItems="center" gap="$2">
            <Text fontSize="$3" color="$color">
                Theme: {theme}
            </Text>

            <Button onPress={toggleTheme} size="$3">
                {isDark ? '☀️' : '🌙'}
            </Button>

            <View flexDirection="row" gap="$1">
                <Button
                    onPress={() => setTheme('light')}
                    size="$2"
                    borderColor="$color"
                    borderWidth={theme === 'light' ? 2 : 1}
                    backgroundColor={theme === 'light' ? '$backgroundPress' : '$background'}
                >
                    Light
                </Button>
                <Button
                    onPress={() => setTheme('dark')}
                    size="$2"
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