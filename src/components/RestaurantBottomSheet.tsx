import React, {forwardRef, useMemo} from 'react';
import {View, Text, StyleSheet, Linking, TouchableOpacity} from 'react-native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {Restaurant} from '../types/Restaurant';

interface RestaurantBottomSheetProps {
  restaurant: Restaurant | null;
}

const RestaurantBottomSheet = forwardRef<
  BottomSheet,
  RestaurantBottomSheetProps
>(({restaurant}, ref) => {
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  const openExternalNavigation = () => {
    if (!restaurant) return;
    
    const url = `https://maps.apple.com/?q=${encodeURIComponent(
      restaurant.name,
    )}&ll=${restaurant.latitude},${restaurant.longitude}`;
    Linking.openURL(url);
  };

  const callRestaurant = () => {
    if (restaurant?.phoneNumber) {
      Linking.openURL(`tel:${restaurant.phoneNumber}`);
    }
  };

  const openWebsite = () => {
    if (restaurant?.website) {
      Linking.openURL(restaurant.website);
    }
  };

  if (!restaurant) return null;

  const getSourceBadgeColor = (source: string) => {
    switch (source) {
      case 'offmenu':
        return '#FF6B6B';
      case 'topjaw':
        return '#4ECDC4';
      default:
        return '#45B7D1';
    }
  };

  const getSourceDisplayName = (source: string) => {
    switch (source) {
      case 'offmenu':
        return 'Off Menu Podcast';
      case 'topjaw':
        return 'Topjaw';
      default:
        return 'Curated';
    }
  };

  return (
    <BottomSheet ref={ref} snapPoints={snapPoints} index={-1} enablePanDownToClose>
      <BottomSheetScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}>{restaurant.name}</Text>
          <View
            style={[
              styles.sourceBadge,
              {backgroundColor: getSourceBadgeColor(restaurant.source)},
            ]}>
            <Text style={styles.sourceBadgeText}>
              {getSourceDisplayName(restaurant.source)}
            </Text>
          </View>
        </View>

        <Text style={styles.cuisine}>{restaurant.cuisine}</Text>
        <Text style={styles.address}>{restaurant.address}</Text>
        <Text style={styles.priceRange}>{restaurant.priceRange}</Text>

        <Text style={styles.description}>{restaurant.description}</Text>

        {restaurant.sourceDetails.guestName && (
          <View style={styles.sourceDetails}>
            <Text style={styles.sourceDetailsTitle}>Featured by:</Text>
            <Text style={styles.sourceDetailsText}>
              {restaurant.sourceDetails.guestName}
            </Text>
            {restaurant.sourceDetails.episodeTitle && (
              <Text style={styles.sourceDetailsText}>
                {restaurant.sourceDetails.episodeTitle}
              </Text>
            )}
          </View>
        )}

        <View style={styles.tags}>
          {restaurant.tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton} onPress={openExternalNavigation}>
            <Text style={styles.actionButtonText}>Navigate</Text>
          </TouchableOpacity>
          
          {restaurant.phoneNumber && (
            <TouchableOpacity style={styles.actionButton} onPress={callRestaurant}>
              <Text style={styles.actionButtonText}>Call</Text>
            </TouchableOpacity>
          )}
          
          {restaurant.website && (
            <TouchableOpacity style={styles.actionButton} onPress={openWebsite}>
              <Text style={styles.actionButtonText}>Website</Text>
            </TouchableOpacity>
          )}
        </View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 8,
  },
  sourceBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  sourceBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  cuisine: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  priceRange: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  sourceDetails: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  sourceDetailsTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  sourceDetailsText: {
    fontSize: 14,
    color: '#666',
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  tag: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 12,
    color: '#666',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 16,
  },
  actionButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  actionButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default RestaurantBottomSheet;