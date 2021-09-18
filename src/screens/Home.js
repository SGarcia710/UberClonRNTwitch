import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Modalize } from 'react-native-modalize';
import { scale } from '../commons/utils';
import MapViewDirections from 'react-native-maps-directions';

const DIRECTIONS_API_KEY = 'AIzaSyCSnUQhzenNAlO5NJcQb2GBlNqtwZxp2Bc';

const { width, height } = Dimensions.get('window');
const INITIAL_REGION = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const HomeScreen = ({ navigation }) => {
  const [marker, setMarker] = React.useState(null);
  const [region, setRegion] = React.useState(INITIAL_REGION);
  const [destinationInfo, setDestinationInfo] = React.useState(null);
  const { top, bottom } = useSafeAreaInsets();
  const modalizeRef = React.useRef(null);
  const mapRef = React.useRef(null);

  const resetMap = () => {
    if (mapRef) {
      mapRef.current.animateToRegion(INITIAL_REGION, 600);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <StatusBar style="dark" />

        <MapView
          ref={mapRef}
          style={{
            ...styles.map,
          }}
          region={region}
          onPress={(e) => {
            if (e.nativeEvent.coordinate) {
              const lat = e.nativeEvent.coordinate.latitude;
              const lng = e.nativeEvent.coordinate.longitude;
              setMarker({
                latitude: lat,
                longitude: lng,
              });
            }
          }}
        >
          <Marker pinColor="blue" coordinate={region} />
          <Circle
            center={region}
            radius={500}
            fillColor="rgba(27, 107, 177, 0.3)"
            strokeColor="#1b6bb1"
          />

          {!!marker && (
            <>
              <MapViewDirections
                origin={region}
                destination={marker}
                apikey={DIRECTIONS_API_KEY}
                strokeWidth={3}
                strokeColor="#7C6DDD"
                onReady={(e) =>
                  setDestinationInfo({
                    duration: e.duration,
                    distance: e.distance,
                  })
                }
              />
            </>
          )}

          {!!marker && !!destinationInfo && (
            <Marker pinColor="red" coordinate={marker}>
              <Callout tooltip>
                <View
                  style={{
                    backgroundColor: 'white',
                    paddingHorizontal: scale(6),
                    paddingVertical: scale(4),
                    borderRadius: scale(2),
                  }}
                >
                  <Text
                    style={{
                      fontSize: scale(12),
                      color: '#4d4b4b',
                    }}
                  >
                    {parseInt(destinationInfo.duration)} minutes
                  </Text>
                  <Text>{destinationInfo.distance}m</Text>
                </View>
              </Callout>
            </Marker>
          )}
        </MapView>

        <TouchableOpacity
          style={{ ...styles.floatingMenu, top }}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons
            name="ios-menu-outline"
            size={28}
            color="rgba(23, 23, 23, 0.71)"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.floatingGps,
            bottom: scale(200 + 13),
            right: scale(9),
          }}
          onPress={resetMap}
        >
          <MaterialIcons
            name="gps-fixed"
            size={24}
            color="rgba(23, 23, 23, 0.71)"
          />
        </TouchableOpacity>
      </View>
      <Modalize
        withOverlay={false}
        alwaysOpen={scale(200)}
        ref={modalizeRef}
        modalStyle={{
          paddingTop: scale(30),
          paddingBottom: bottom,
        }}
      >
        <Text style={styles.modalSubtitle}>Nice to see you!</Text>
        <Text style={styles.modalTitle}>Where are you going?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Destination')}
          style={styles.modalInputContainer}
        >
          <Ionicons color="#7C6DDD" size={scale(20)} name="search" />

          <Text style={styles.modalInput}>Search destination </Text>
        </TouchableOpacity>
      </Modalize>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width,
    height,
  },
  modalInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: scale(49),
    width: '100%',
    borderRadius: scale(11),
    backgroundColor: 'white',
    paddingHorizontal: scale(13),
    width: scale(374),
    shadowColor: 'black',
    shadowOpacity: scale(0.25),
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: scale(9),
    marginLeft: scale(20),
  },
  modalInput: {
    marginLeft: scale(11.3),
    fontSize: scale(17),
    color: 'rgba(0,0,0,0.49)',
    fontWeight: '300',
    letterSpacing: scale(-0.3),
  },
  floatingMenu: {
    width: scale(50),
    height: scale(50),
    backgroundColor: 'white',
    borderRadius: scale(50 / 2),
    shadowColor: 'black',
    shadowOpacity: scale(0.1),
    shadowOffset: {
      width: scale(5),
      height: scale(1),
    },
    shadowRadius: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: scale(13),
  },
  floatingGps: {
    width: scale(50),
    height: scale(50),
    backgroundColor: 'white',
    borderRadius: scale(50 / 2),
    shadowColor: 'black',
    shadowOpacity: scale(0.1),
    shadowOffset: {
      width: scale(5),
      height: scale(1),
    },
    shadowRadius: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  modalTitle: {
    marginLeft: scale(20),
    fontSize: scale(21),
    fontWeight: '600',
    color: 'rgba(0,0,0,0.75)',
    marginBottom: scale(22),
  },
  modalSubtitle: {
    marginLeft: scale(20),
    fontSize: scale(12),
    fontWeight: '300',
    color: 'rgba(0,0,0,0.64)',
    marginBottom: scale(4),
    marginLeft: scale(20),
  },
});

export default HomeScreen;
