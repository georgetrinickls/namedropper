import React from 'react';
import {Marker} from 'react-native-maps';
import {View, StyleSheet} from 'react-native';
import {Restaurant} from '../types/Restaurant';

interface RestaurantMarkerProps {
  restaurant: Restaurant;
  onPress: () => void;
}

const RestaurantMarker: React.FC<RestaurantMarkerProps> = ({
  restaurant,
  onPress,
}) => {
  const getMarkerColor = (source: string) => {
    switch (source) {
      case 'offmenu':
        return '#FF6B6B';
      case 'topjaw':
        return '#4ECDC4';
      default:
        return '#45B7D1';
    }
  };

  return (
    <Marker
      coordinate={{
        latitude: restaurant.latitude,
        longitude: restaurant.longitude,
      }}
      onPress={onPress}
      anchor={{x: 0.5, y: 0.5}}>
      <View
        style={[
          styles.marker,
          {backgroundColor: getMarkerColor(restaurant.source)},
        ]}>
        <View style={styles.innerMarker} />
      </View>
    </Marker>
  );
};

const styles = StyleSheet.create({
  marker: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  innerMarker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white',
  },
});

export default RestaurantMarker;