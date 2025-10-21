import React from 'react';
import { View, Text, Button } from 'tamagui';
import { LinearGradient } from '@tamagui/linear-gradient';
import { Platform } from 'react-native';
import { useThemeStore } from '../../stores/themeStore';

interface GradientNavBarProps {
  title?: string;
  showThemeToggle?: boolean;
}

export const GradientNavBar: React.FC<GradientNavBarProps> = ({
  title = 'Happy Learning',
  showThemeToggle = true,
}) => {
  const { theme, toggleTheme } = useThemeStore();

  const getPaddingTop = () => {
    if (Platform.OS === 'web') {
    }

    try {
      const { useSafeAreaInsets } = require('react-native-safe-area-context');
      const insets = useSafeAreaInsets();
      return insets.top + 16;
    } catch (error) {
      return '$6';
    }
  };

  return (
    <LinearGradient
      colors={['$primary', '$primaryDark']}
      start={[0, 1]}
      end={[1, 0]}
      padding="$4"
      paddingTop={getPaddingTop()}
      shadowColor="$shadowColor"
      shadowOffset={{ width: 0, height: 4 }}
      shadowOpacity={0.2}
      shadowRadius={8}
    >
      <View flexDirection="row" justifyContent="space-between" alignItems="center">
        <Text
          fontSize={Platform.OS === 'web' ? '$8' : '$6'}
          fontWeight="bold"
          color="white"
          fontFamily="System"
        >
          {title}
        </Text>

        {showThemeToggle && (
          <Button
            onPress={toggleTheme}
            size="$3"
            backgroundColor="rgba(255,255,255,0.2)"
            borderColor="rgba(255,255,255,0.3)"
            borderRadius="$3"
            color="white"
            pressStyle={{
              backgroundColor: 'rgba(255,255,255,0.3)',
            }}
          >
            <Text fontSize="$3" color="white">
              {theme === 'dark' ? '☀️' : '🌙'}
            </Text>
          </Button>
        )}
      </View>
    </LinearGradient>
  );
};
