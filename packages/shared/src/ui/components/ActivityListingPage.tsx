import React from 'react';
import { YStack } from 'tamagui';
import { GradientNavBar } from './GradientNavbar';
import { ActivityList } from './ActivityList';
import type { Activity } from '../../types/activity';

interface ActivityListingPageProps {
  activities: Activity[];
  onActivityAction?: (activityId: string, action: string) => void;
}

export const ActivityListingPage: React.FC<ActivityListingPageProps> = ({
  activities,
  onActivityAction = (id, action) => {
    console.log(`Activity ${id}: ${action}`);
  },
}) => {
  return (
    <YStack flex={1} height="100%" backgroundColor="$background">
      <GradientNavBar title="Happy Learning" />
      <ActivityList activities={activities} onActivityAction={onActivityAction} />
    </YStack>
  );
};
