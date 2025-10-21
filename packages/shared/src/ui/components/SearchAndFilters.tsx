import React from 'react';
import { Text, Input, Button, XStack, YStack, ScrollView } from 'tamagui';
import type { ActivityType, ActivityStatus, FilterOptions } from '../../types/activity';

interface SearchAndFiltersProps {
  onFiltersChange: (filters: FilterOptions) => void;
  onSearchChange: (query: string) => void;
}

const ACTIVITY_TYPES: { value: ActivityType; label: string; icon: string }[] = [
  { value: 'online-class', label: 'Classes', icon: '📚' },
  { value: 'assignment', label: 'Assignments', icon: '📝' },
  { value: 'quiz', label: 'Quizzes', icon: '❓' },
  { value: 'discussion', label: 'Discussions', icon: '💬' },
];

const STATUS_OPTIONS: { value: ActivityStatus; label: string }[] = [
  { value: 'not-started', label: 'Not Started' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'completed', label: 'Completed' },
];

export const SearchAndFilters: React.FC<SearchAndFiltersProps> = ({
  onFiltersChange,
  onSearchChange,
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedTypes, setSelectedTypes] = React.useState<ActivityType[]>([]);
  const [selectedStatuses, setSelectedStatuses] = React.useState<ActivityStatus[]>([]);
  const [showFilters, setShowFilters] = React.useState(false);

  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
    onSearchChange(text);
  };

  const toggleType = (type: ActivityType) => {
    const newTypes = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type];
    setSelectedTypes(newTypes);
    onFiltersChange({ type: newTypes, status: selectedStatuses });
  };

  const toggleStatus = (status: ActivityStatus) => {
    const newStatuses = selectedStatuses.includes(status)
      ? selectedStatuses.filter(s => s !== status)
      : [...selectedStatuses, status];
    setSelectedStatuses(newStatuses);
    onFiltersChange({ type: selectedTypes, status: newStatuses });
  };

  return (
    <YStack backgroundColor="$background" paddingVertical="$3" paddingHorizontal="$4" gap="$3">
      <XStack
        alignItems="center"
        backgroundColor="$backgroundStrong"
        borderRadius="$3"
        borderWidth={1}
        borderColor="$borderColor"
        paddingHorizontal="$3"
        paddingVertical="$2"
        gap="$2"
      >
        <Text fontSize="$3" color="$colorSecondary">
          🔍
        </Text>
        <Input
          flex={1}
          placeholder="Search activities by title, tag, or keyword..."
          value={searchQuery}
          onChangeText={handleSearchChange}
          backgroundColor="transparent"
          borderWidth={0}
          fontSize="$3"
          placeholderTextColor="$colorSecondary"
          color="$color"
        />
        {searchQuery ? (
          <Button
            size="$2"
            circular
            backgroundColor="transparent"
            onPress={() => handleSearchChange('')}
            padding="$1"
          >
            <Text fontSize="$3" color="$colorSecondary">
              ✕
            </Text>
          </Button>
        ) : null}
      </XStack>

      <YStack display="flex" $gtSm={{ display: 'none' }} gap="$2">
        <XStack justifyContent="space-between" alignItems="center">
          <Text
            fontSize="$2"
            fontWeight="600"
            color="$colorSecondary"
            textTransform="uppercase"
            letterSpacing={0.5}
          >
            Filters
          </Text>
          <Button
            size="$2"
            backgroundColor="transparent"
            onPress={() => setShowFilters(!showFilters)}
            padding="$1"
          >
            <Text fontSize="$3" color="$colorSecondary">
              {showFilters ? '▼' : '▶'}
            </Text>
          </Button>
        </XStack>

        {showFilters && (
          <YStack gap="$3">
            <YStack gap="$2">
              <Text
                fontSize="$2"
                fontWeight="600"
                color="$colorSecondary"
                textTransform="uppercase"
                letterSpacing={0.5}
              >
                Types
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <XStack gap="$2" paddingHorizontal="$1">
                  {ACTIVITY_TYPES.map(({ value, label }) => {
                    const isActive = selectedTypes.includes(value);
                    return (
                      <Button
                        key={value}
                        onPress={() => toggleType(value)}
                        size="$2"
                        backgroundColor={isActive ? '$primary' : '$backgroundStrong'}
                        borderWidth={1}
                        borderColor={isActive ? '$primary' : '$borderColor'}
                        borderRadius="$4"
                        paddingHorizontal="$3"
                        minWidth={80}
                      >
                        <Text fontSize="$2" color={isActive ? 'white' : '$color'}>
                          {label}
                        </Text>
                      </Button>
                    );
                  })}
                </XStack>
              </ScrollView>
            </YStack>

            <YStack gap="$2">
              <Text
                fontSize="$2"
                fontWeight="600"
                color="$colorSecondary"
                textTransform="uppercase"
                letterSpacing={0.5}
              >
                Status
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <XStack gap="$2" paddingHorizontal="$1">
                  {STATUS_OPTIONS.map(({ value, label }) => {
                    const isActive = selectedStatuses.includes(value);
                    return (
                      <Button
                        key={value}
                        onPress={() => toggleStatus(value)}
                        size="$2"
                        backgroundColor={isActive ? '$primary' : '$backgroundStrong'}
                        borderWidth={1}
                        borderColor={isActive ? '$primary' : '$borderColor'}
                        borderRadius="$4"
                        paddingHorizontal="$3"
                        minWidth={80}
                      >
                        <Text fontSize="$2" color={isActive ? 'white' : '$color'}>
                          {label}
                        </Text>
                      </Button>
                    );
                  })}
                </XStack>
              </ScrollView>
            </YStack>
          </YStack>
        )}
      </YStack>

      <YStack display="none" $gtSm={{ display: 'flex' }} gap="$4">
        <YStack gap="$2">
          <Text
            fontSize="$2"
            fontWeight="600"
            color="$colorSecondary"
            textTransform="uppercase"
            letterSpacing={0.5}
          >
            Activity Types
          </Text>
          <XStack gap="$2" flexWrap="wrap">
            {ACTIVITY_TYPES.map(({ value, label }) => {
              const isActive = selectedTypes.includes(value);
              return (
                <Button
                  key={value}
                  onPress={() => toggleType(value)}
                  size="$3"
                  backgroundColor={isActive ? '$primary' : '$backgroundStrong'}
                  borderWidth={1}
                  borderColor={isActive ? '$primary' : '$borderColor'}
                  borderRadius="$5"
                  paddingHorizontal="$4"
                  hoverStyle={{
                    backgroundColor: isActive ? '$primaryDark' : '$backgroundHover',
                    borderColor: '$primary',
                  }}
                >
                  <Text fontSize="$3" color={isActive ? 'white' : '$color'}>
                    {label}
                  </Text>
                </Button>
              );
            })}
          </XStack>
        </YStack>

        <YStack gap="$2">
          <Text
            fontSize="$2"
            fontWeight="600"
            color="$colorSecondary"
            textTransform="uppercase"
            letterSpacing={0.5}
          >
            Status
          </Text>
          <XStack gap="$2" flexWrap="wrap">
            {STATUS_OPTIONS.map(({ value, label }) => {
              const isActive = selectedStatuses.includes(value);
              return (
                <Button
                  key={value}
                  onPress={() => toggleStatus(value)}
                  size="$3"
                  backgroundColor={isActive ? '$primary' : '$backgroundStrong'}
                  borderWidth={1}
                  borderColor={isActive ? '$primary' : '$borderColor'}
                  borderRadius="$5"
                  paddingHorizontal="$4"
                  hoverStyle={{
                    backgroundColor: isActive ? '$primaryDark' : '$backgroundHover',
                    borderColor: '$primary',
                  }}
                >
                  <Text fontSize="$3" color={isActive ? 'white' : '$color'}>
                    {label}
                  </Text>
                </Button>
              );
            })}
          </XStack>
        </YStack>
      </YStack>
    </YStack>
  );
};
