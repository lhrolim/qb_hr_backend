import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import InterestScreen from '../screens/interests/interest-screen';

const InterestsTabStackNavigation = createStackNavigator(
  {
    Interest: { screen: InterestScreen }
  }, {
    initialRouteName: 'Interest'
  }
)

InterestsTabStackNavigation.navigationOptions = {
  tabBarLabel: 'Interesses',
  tabBarIcon: ({ focused, tintColor }) => {
    return <Ionicons name={focused ? 'ios-bookmarks' : 'ios-bookmarks-outline' } 
      size={25} color={tintColor} />
  }
};

export default InterestsTabStackNavigation;