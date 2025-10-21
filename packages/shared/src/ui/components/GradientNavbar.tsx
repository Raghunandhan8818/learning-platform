import React from 'react';
import { View, Text, Button } from 'tamagui';
import { LinearGradient } from '@tamagui/linear-gradient';
import { useThemeStore } from '@learning/shared'; // Use the shared store

interface GradientNavBarProps {
  title?: string;
  showThemeToggle?: boolean;
}

export const GradientNavBar: React.FC<GradientNavBarProps> = ({
                                                                title = 'Learning Activities',
                                                                showThemeToggle = true,
                                                              }) => {
  const { theme, toggleTheme } = useThemeStore();

  return (
      <LinearGradient
          colors={['$primary', '$primaryDark']}
          start={[0, 1]}
          end={[1, 0]}
          padding="$4"
          paddingTop="$6"
          borderBottomLeftRadius="$4"
          borderBottomRightRadius="$4"
          shadowColor="$shadowColor"
          shadowOffset={{ width: 0, height: 4 }}
          shadowOpacity={0.2}
          shadowRadius={8}
      >
        <View flexDirection="row" justifyContent="space-between" alignItems="center">
          <Text fontSize="$6" fontWeight="bold" color="white" fontFamily="System">
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

