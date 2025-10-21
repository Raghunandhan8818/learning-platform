import { YStack } from 'tamagui';
import { ThemeProvider, ActivityListingPage, mockActivities } from '@learning/shared';

export default function App() {
  return (
    <ThemeProvider>
      <YStack f={1} bg="$background">
        <ActivityListingPage activities={mockActivities} />
      </YStack>
    </ThemeProvider>
  );
}
