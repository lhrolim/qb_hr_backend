import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HelpScreen from '../screens/help/help-screen';

const HelpTabStackNavigation = createStackNavigator(
  {
    Help: { screen: HelpScreen }
  }, {
    initialRouteName: 'Help'
  }
);

HelpTabStackNavigation.navigationOptions = {
  tabBarLabel: 'Ajuda',
  tabBarIcon: ({ focused, tintColor }) => {
    return <Ionicons name={focused ? 'ios-help-buoy' : 'ios-help-buoy-outline' } 
      size={25} color={tintColor} />
  }
};

export default HelpTabStackNavigation;