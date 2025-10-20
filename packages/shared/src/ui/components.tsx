import { Button, Text, View } from 'tamagui';
import React from 'react';

const WELCOME_MESSAGE = 'Welcome to Learning Platform!';

export const WelcomeScreen = () => {
  return (
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
      <Button size="$4">
        Hello World!
      </Button>
    </View>
  );
};

export const PlatformButton = ({ children, ...props }: any) => {
  return (
    <Button theme="blue" size="$4" {...props}>
      {children}
    </Button>
  );
};

export const PlatformText = ({ children, ...props }: any) => {
  return (
    <Text fontSize="$6" fontWeight="bold" textAlign="center" {...props}>
      {children}
    </Text>
  );
};
