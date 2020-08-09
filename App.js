import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Card from './src/components/Card';
import placesData from './src/static/places.json';
import PlacesList from './src/components/PlacesList';
import PlaceDetail from './src/components/PlaceDetail';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  placesList: {
    screen: PlacesList,
    navigationOptions: {
      title: 'Explore',
    },
  },
  placeDetail: {
    screen: PlaceDetail,
    navigationOptions: {
      title: 'Explore',
    },
  },
});

export default createAppContainer(AppNavigator);
