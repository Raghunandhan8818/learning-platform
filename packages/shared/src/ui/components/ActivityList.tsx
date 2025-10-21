import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, YStack } from 'tamagui';
import type { Activity, FilterOptions } from '../../types/activity';
import { ActivityCard } from './ActivityCard';
import { SearchAndFilters } from './SearchAndFilters';

interface ActivityListProps {
  activities: Activity[];
  onActivityAction: (activityId: string, action: string) => void;
}

export const ActivityList: React.FC<ActivityListProps> = ({ activities, onActivityAction }) => {
  const [filters, setFilters] = useState<FilterOptions>({});
  const [searchQuery, setSearchQuery] = useState('');

  const filteredActivities = useMemo(() => {
    return activities.filter(activity => {
      const searchLower = searchQuery.toLowerCase();
      if (
        searchQuery &&
        !activity.title.toLowerCase().includes(searchLower) &&
        !activity.description.toLowerCase().includes(searchLower) &&
        !activity.tags.some(tag => tag.toLowerCase().includes(searchLower))
      ) {
        return false;
      }

      if (filters.type && filters.type.length > 0 && !filters.type.includes(activity.type)) {
        return false;
      }

      return !(
        filters.status &&
        filters.status.length > 0 &&
        !filters.status.includes(activity.status)
      );
    });
  }, [activities, filters, searchQuery]);

  const handleFiltersChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <YStack flex={1} backgroundColor="$background">
      <SearchAndFilters onFiltersChange={handleFiltersChange} onSearchChange={handleSearchChange} />
      <ScrollView
        flex={1}
        contentContainerStyle={{
          padding: 16,
        }}
      >
        {filteredActivities.length === 0 ? (
          <View flex={1} alignItems="center" justifyContent="center" padding="$8" minHeight={200}>
            <Text fontSize="$5" color="$color" opacity={0.6} textAlign="center">
              {searchQuery || Object.keys(filters).some(key => (filters as any)[key]?.length > 0)
                ? 'No activities match your search or filters.'
                : 'No activities available.'}
            </Text>
          </View>
        ) : (
          <View flexDirection="row" flexWrap="wrap" margin={-6}>
            {filteredActivities.map(activity => (
              <View
                key={activity.id}
                padding={6}
                width="100%"
                $gtSm={{
                  width: '50%',
                }}
                $gtMd={{
                  width: '33.333%',
                }}
                $gtLg={{
                  width: '25%',
                }}
              >
                <ActivityCard activity={activity} onAction={onActivityAction} />
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </YStack>
  );
};
