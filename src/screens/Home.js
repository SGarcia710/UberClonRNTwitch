import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'white',
          borderRadius: 50 / 2,
          shadowColor: 'black',
          shadowOpacity: '0.1',
          shadowOffset: {
            width: 5,
            height: 1,
          },
          shadowRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.openDrawer()}
      >
        <Ionicons
          name="ios-menu-outline"
          size={28}
          color="rgba(23, 23, 23, 0.71)"
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
