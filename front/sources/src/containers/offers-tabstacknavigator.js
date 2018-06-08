import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { fadeIn } from 'react-navigation-transitions';
import OfferListScreen from '../screens/offer-list/offer-list-screen';
import OfferDetailsScreen from '../screens/offer-details/offer-details-screen';

const OfferTabStackNavigation = createStackNavigator(
  {
    OfferList: { screen: OfferListScreen },
    OfferDetails: { screen: OfferDetailsScreen }
  },
  {
    initialRouteName: 'OfferList'
  }
);


OfferTabStackNavigation.navigationOptions = {
  tabBarLabel: 'Buscar',
  tabBarIcon: ({ focused, tintColor }) => {
    return <Ionicons name={focused ? 'ios-search' : 'ios-search-outline'}
      size={25} color={tintColor} />
  }
};

export default OfferTabStackNavigation;