import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { scale } from '../commons/utils';
const PLACES_API_KEY = 'AIzaSyCSnUQhzenNAlO5NJcQb2GBlNqtwZxp2Bc';
const DestinationScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Ionicons color="#4F4F4F" size={scale(22)} name="arrow-back" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Enter Destination</Text>
      </View>

      <View style={styles.inputs}>
        <View
          style={{
            alignItems: 'center',
            paddingVertical: scale(11),
            marginBottom: scale(8),
            marginRight: scale(10),
            justifyContent: 'space-between',
          }}
        >
          <Image
            style={{
              width: scale(15),
              height: scale(15),
              resizeMode: 'contain',
            }}
            source={require('../../assets/GreenDot.png')}
          />
          <View
            style={{
              width: scale(1),
              backgroundColor: '#4F4F4F',
              flex: 1,
            }}
          />
          <Image
            style={{
              width: scale(12),
              height: scale(15),
              resizeMode: 'contain',
            }}
            source={require('../../assets/DestinationDot.png')}
          />
        </View>
        <View>
          {/* <GooglePlacesAutocomplete
            placeholder="Search"
            onPress={(data, details = null) => {
              console.log(data, details);
            }}
            query={{
              key: PLACES_API_KEY,
              language: 'en',
            }}
            styles={{
              container: {
                zIndex: 99,
                position: 'absolute',
              },
              textInputContainer: {
                ...styles.input,
                backgroundColor: 'transparent',
              },
              textInput: {
                ...styles.input,
              },
              predefinedPlacesDescription: {},
            }}
          /> */}
          <TextInput style={styles.input} placeholder="From" />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <TextInput
              style={[
                styles.input,
                {
                  marginRight: scale(16),
                },
              ]}
              placeholder="To"
            />
            <TouchableOpacity>
              <Ionicons color="#4F4F4F" size={scale(30)} name="add" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    backgroundColor: 'rgba(202, 200, 200, 0.16)',
    borderRadius: scale(3.06316),
    // paddingVertical: scale(9),
    height: scale(38),
    paddingHorizontal: scale(17),
    color: '#333333',
    fontSize: scale(16),
    letterSpacing: -scale(0.43),
    width: scale(305),
    marginBottom: scale(8),
  },
  headerTitle: {
    marginLeft: scale(32.5),
    fontWeight: '500',
    fontSize: scale(23),
    letterSpacing: -scale(0.3),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: scale(13),
    paddingHorizontal: scale(20),
  },
  inputs: {
    borderBottomWidth: scale(1.05212),
    borderBottomColor: 'rgba(0, 0, 0, 0.4)',
    paddingHorizontal: scale(20),
    flexDirection: 'row',
  },
});

export default DestinationScreen;
