import React from 'react';
import { View, Text, Button, XStack, YStack } from 'tamagui';
import type { Activity } from '../../types/activity';

const getTypeBadgeStyle = (type: string) => {
  switch (type) {
    case 'online-class':
      return { bg: '#dbeafe', color: '#1e40af', label: 'LIVE CLASS' };
    case 'assignment':
      return { bg: '#fef3c7', color: '#92400e', label: 'ASSIGNMENT' };
    case 'quiz':
      return { bg: '#fce7f3', color: '#9f1239', label: 'QUIZ' };
    case 'discussion':
      return { bg: '#d1fae5', color: '#065f46', label: 'DISCUSSION' };
    default:
      return { bg: '#f3f4f6', color: '#374151', label: 'ACTIVITY' };
  }
};

const getStatusBadgeStyle = (status: string) => {
  switch (status) {
    case 'not-started':
      return { bg: '#e0e7ff', color: '#3730a3', label: 'Upcoming' };
    case 'in-progress':
      return { bg: '#fed7aa', color: '#9a3412', label: 'In Progress' };
    case 'completed':
      return { bg: '#d1fae5', color: '#065f46', label: 'Completed' };
    case 'overdue':
      return { bg: '#fee2e2', color: '#991b1b', label: 'Overdue' };
    default:
      return { bg: '#f3f4f6', color: '#6b7280', label: status };
  }
};

const getDifficultyBadgeStyle = (difficulty: string) => {
  switch (difficulty) {
    case 'beginner':
      return { bg: '#d1fae5', color: '#065f46', label: 'Beginner' };
    case 'intermediate':
      return { bg: '#fed7aa', color: '#9a3412', label: 'Intermediate' };
    case 'advanced':
      return { bg: '#fee2e2', color: '#991b1b', label: 'Advanced' };
    default:
      return { bg: '#f3f4f6', color: '#6b7280', label: difficulty };
  }
};

export const ActivityCard: React.FC<{
  activity: Activity;
  onAction: (id: string, action: string) => void;
}> = ({ activity, onAction }) => {
  const typeBadge = getTypeBadgeStyle(activity.type);
  const statusBadge = getStatusBadgeStyle(activity.status);
  const difficultyBadge = getDifficultyBadgeStyle(activity.difficulty);
  const isCompleted = activity.status === 'completed';

  const getActionButton = () => {
    switch (activity.status) {
      case 'not-started':
        return {
          label: activity.type === 'online-class' ? 'Join Class' : 'Start',
          action: 'start',
        };
      case 'in-progress':
        return { label: 'Continue', action: 'continue' };
      case 'completed':
        return { label: 'Review', action: 'review' };
      case 'overdue':
        return { label: 'View Details', action: 'view' };
      default:
        return { label: 'View', action: 'view' };
    }
  };
  const actionButton = getActionButton();

  return (
    <View
      backgroundColor="$backgroundStrong"
      borderWidth={1}
      borderColor="$borderColor"
      borderRadius="$4"
      padding="$4"
      shadowColor="$shadowColor"
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={1}
      shadowRadius={8}
      hoverStyle={{
        borderColor: '$primary',
        shadowColor: '$shadowColorHover',
        shadowOpacity: 1,
        shadowRadius: 12,
      }}
      cursor="pointer"
      flex={1}
    >
      <YStack gap="$3" flex={1}>
        <XStack justifyContent="space-between" alignItems="flex-start" flexWrap="wrap" gap="$2">
          <XStack gap="$2" alignItems="center">
            <View
              backgroundColor={typeBadge.bg}
              paddingHorizontal="$3"
              paddingVertical="$1.5"
              borderRadius="$2"
            >
              <Text fontSize="$1" color={typeBadge.color} fontWeight="700" letterSpacing={0.5}>
                {typeBadge.label}
              </Text>
            </View>
            {activity.isLive && (
              <View
                backgroundColor="$error"
                paddingHorizontal="$3"
                paddingVertical="$1.5"
                borderRadius="$2"
              >
                <Text fontSize="$1" color="white" fontWeight="700" letterSpacing={0.5}>
                  LIVE
                </Text>
              </View>
            )}
          </XStack>
          <XStack gap="$2" alignItems="center">
            <View
              backgroundColor={statusBadge.bg}
              paddingHorizontal="$3"
              paddingVertical="$1.5"
              borderRadius="$2"
            >
              <Text fontSize="$1" color={statusBadge.color} fontWeight="600">
                {statusBadge.label}
              </Text>
            </View>
          </XStack>
        </XStack>

        <Text fontSize="$5" fontWeight="600" color="$color" lineHeight="$5">
          {activity.title}
        </Text>

        <XStack gap="$3" flexWrap="wrap" ai="center">
          <View backgroundColor={difficultyBadge.bg} px="$3" py="$1.5" br="$2">
            <Text fontSize="$1" color={difficultyBadge.color} tt="capitalize" fontWeight="600">
              {difficultyBadge.label}
            </Text>
          </View>
          {activity.points && (
            <Text fontSize="$2" color="$colorSecondary">
              🏆 {activity.points} pts
            </Text>
          )}
          {activity.duration && (
            <Text fontSize="$2" color="$colorSecondary">
              ⏱️ {activity.duration} min
            </Text>
          )}
        </XStack>

        {(activity.startTime || activity.dueDate) && (
          <Text fontSize="$2" color="$colorSecondary">
            📅{' '}
            {activity.startTime
              ? new Date(activity.startTime).toLocaleString()
              : `Due: ${activity.dueDate}`}
          </Text>
        )}
        {activity.instructor && (
          <Text fontSize="$2" color="$colorSecondary">
            👤 {activity.instructor}
          </Text>
        )}

        <Text fontSize="$3" color="$colorSecondary" lineHeight="$4" flex={1}>
          {activity.description}
        </Text>

        {activity.progress !== undefined && activity.status === 'in-progress' && (
          <YStack gap="$2">
            <XStack justifyContent="space-between">
              <Text fontSize="$2" color="$colorSecondary" fontWeight="600">
                Progress
              </Text>
              <Text fontSize="$2" color="$colorSecondary" fontWeight="600">
                {activity.progress}%
              </Text>
            </XStack>
            <View backgroundColor="$borderColor" height={6} borderRadius="$10" overflow="hidden">
              <View
                backgroundColor="$primary"
                height="100%"
                width={`${activity.progress}%`}
                borderRadius="$10"
              />
            </View>
          </YStack>
        )}

        {activity.tags.length > 0 && (
          <XStack gap="$2" flexWrap="wrap">
            {activity.tags.map((tag, index) => (
              <View
                key={index}
                backgroundColor="$backgroundHover"
                paddingHorizontal="$3"
                paddingVertical="$1.5"
                borderRadius="$2"
              >
                <Text fontSize="$1" color="$colorSecondary">
                  {tag}
                </Text>
              </View>
            ))}
          </XStack>
        )}

        <XStack justifyContent="space-between" alignItems="center" marginTop="auto" paddingTop="$3">
          {isCompleted && activity.score && (
            <Text fontSize="$3" color="$success" fontWeight="600">
              {activity.score}
            </Text>
          )}
          <Button
            onPress={() => onAction(activity.id, actionButton.action)}
            backgroundColor={isCompleted ? '$backgroundHover' : '$primary'}
            color={isCompleted ? '$color' : 'white'}
            size="$3"
            borderRadius="$3"
            fontWeight="600"
            paddingHorizontal="$5"
            marginLeft={isCompleted ? 'auto' : 'auto'}
            hoverStyle={{ backgroundColor: isCompleted ? '$backgroundPress' : '$primaryDark' }}
          >
            {actionButton.label}
          </Button>
        </XStack>
      </YStack>
    </View>
  );
};
