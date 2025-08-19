import React, {useState, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import MapLibreGL from '@maplibre/maplibre-react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {Restaurant} from '../types/Restaurant';
import {sampleRestaurants} from '../data/sampleRestaurants';
import RestaurantBottomSheet from '../components/RestaurantBottomSheet';
import {MAP_CONFIG} from '../config/mapConfig';

// Initialize MapLibre
MapLibreGL.setAccessToken(null);

const MapScreen: React.FC = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleMarkerPress = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    bottomSheetRef.current?.expand();
  };

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
    <View style={styles.container}>
      <MapLibreGL.MapView 
        style={styles.map}
        styleURL={MAP_CONFIG.styleURL}
        zoomEnabled={true}
        scrollEnabled={true}
        pitchEnabled={false}
        rotateEnabled={false}>
        
        <MapLibreGL.Camera
          zoomLevel={MAP_CONFIG.defaultZoom}
          centerCoordinate={MAP_CONFIG.defaultCenter}
        />

        <MapLibreGL.UserLocation visible={true} />

        {sampleRestaurants.map(restaurant => (
          <MapLibreGL.PointAnnotation
            key={restaurant.id}
            id={restaurant.id}
            coordinate={[restaurant.longitude, restaurant.latitude]}
            onSelected={() => handleMarkerPress(restaurant)}>
            <View
              style={[
                styles.marker,
                {backgroundColor: getMarkerColor(restaurant.source)},
              ]}>
              <View style={styles.innerMarker} />
            </View>
          </MapLibreGL.PointAnnotation>
        ))}
      </MapLibreGL.MapView>

      <RestaurantBottomSheet
        ref={bottomSheetRef}
        restaurant={selectedRestaurant}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
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

export default MapScreen;